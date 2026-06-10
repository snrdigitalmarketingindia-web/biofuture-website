"""
Bing URL Indexing — RDN Bio Products (rdnbio.com)
--------------------------------------------------
Reads public/sitemap.xml, prioritises pages with today's <lastmod>,
then submits up to 100 URLs per run via the Bing Webmaster API.

Requires env var BING_API_KEY (stored as GitHub secret).
"""

import os
import sys
import xml.etree.ElementTree as ET
from datetime import date, datetime, timezone
import requests

# ── Config ────────────────────────────────────────────────────────────────────
SITE_URL       = "https://rdnbio.com/"
SITEMAP_PATH   = "public/sitemap.xml"      # relative to repo root
BING_API_URL   = "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch"
DAILY_QUOTA    = 100                        # Bing free tier limit
# ─────────────────────────────────────────────────────────────────────────────

def load_urls(sitemap_path: str) -> list[dict]:
    """Parse sitemap and return list of {url, lastmod, priority}."""
    tree = ET.parse(sitemap_path)
    ns   = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = []
    for url_el in tree.getroot().findall("sm:url", ns):
        loc      = url_el.findtext("sm:loc",      namespaces=ns) or ""
        lastmod  = url_el.findtext("sm:lastmod",  namespaces=ns) or ""
        priority = url_el.findtext("sm:priority", namespaces=ns) or "0.5"
        urls.append({"url": loc, "lastmod": lastmod, "priority": float(priority)})
    return urls


def prioritise(urls: list[dict]) -> list[str]:
    """
    Sort order:
      1. Pages whose lastmod == today  (freshest first)
      2. All others by priority desc, then alphabetical
    Returns plain URL strings, capped at DAILY_QUOTA.
    """
    today_str = date.today().isoformat()          # e.g. "2026-06-10"
    today   = [u for u in urls if u["lastmod"] == today_str]
    rest    = [u for u in urls if u["lastmod"] != today_str]

    today.sort(key=lambda u: (-u["priority"], u["url"]))
    rest.sort( key=lambda u: (-u["priority"], u["url"]))

    ordered = today + rest
    return [u["url"] for u in ordered[:DAILY_QUOTA]]


def submit_to_bing(api_key: str, urls: list[str]) -> None:
    """POST URL batch to Bing Webmaster API."""
    payload = {
        "siteUrl":  SITE_URL,
        "urlList":  urls,
    }
    params  = {"apikey": api_key}
    headers = {"Content-Type": "application/json; charset=utf-8"}

    print(f"Submitting {len(urls)} URL(s) to Bing …")
    resp = requests.post(BING_API_URL, json=payload, params=params, headers=headers, timeout=30)

    if resp.status_code == 200:
        data = resp.json()
        # Bing returns {"d": null} on success or {"d": {"ErrorCode": ...}} on error
        d = data.get("d")
        if d and d.get("ErrorCode", 0) != 0:
            print(f"⚠️  Bing API error: {d}", file=sys.stderr)
            sys.exit(1)
        print(f"✅  Bing accepted {len(urls)} URL(s).")
        for u in urls:
            print(f"   → {u}")
    else:
        print(f"❌  HTTP {resp.status_code}: {resp.text}", file=sys.stderr)
        sys.exit(1)


def main():
    api_key = os.environ.get("BING_API_KEY", "").strip()
    if not api_key:
        print("❌  BING_API_KEY env var is not set.", file=sys.stderr)
        sys.exit(1)

    urls     = load_urls(SITEMAP_PATH)
    to_send  = prioritise(urls)

    print(f"Sitemap has {len(urls)} URLs; sending {len(to_send)} (quota={DAILY_QUOTA}).")
    submit_to_bing(api_key, to_send)


if __name__ == "__main__":
    main()
