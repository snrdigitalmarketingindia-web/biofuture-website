import React, { useState, useEffect, useCallback } from 'react';

// ─────────────────────────────────────────────────────────────
// SETUP — after creating Google Apps Script (see README below)
// paste your deployed web app URL and choose a password:
const SCRIPT_URL    = process.env.REACT_APP_SCRIPT_URL    || '';
const SCRIPT_SECRET = process.env.REACT_APP_SCRIPT_SECRET || 'rdn2026secret';
const ADMIN_PASS    = process.env.REACT_APP_ADMIN_PASS    || 'rdnadmin2026';
// ─────────────────────────────────────────────────────────────

const STATUS_COLORS = {
  New:       { bg: '#e8f4fd', color: '#1a6fa8', border: '#90caf9' },
  Contacted: { bg: '#fff8e1', color: '#a06000', border: '#ffe082' },
  Approved:  { bg: '#e8f5e9', color: '#2e7d32', border: '#a5d6a7' },
  Rejected:  { bg: '#fbe9e7', color: '#c62828', border: '#ef9a9a' },
};

const COLS = ['Timestamp', 'Name', 'Phone', 'Email', 'City', 'State', 'Business Type', 'Experience', 'Monthly Volume', 'Message', 'Status'];

function Badge({ status }) {
  const s = STATUS_COLORS[status] || STATUS_COLORS.New;
  return (
    <span style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}`, borderRadius: 20, padding: '3px 10px', fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap' }}>
      {status}
    </span>
  );
}

export default function AdminPage() {
  const [authed, setAuthed]     = useState(() => sessionStorage.getItem('rdn_admin') === '1');
  const [pass, setPass]         = useState('');
  const [passErr, setPassErr]   = useState(false);
  const [rows, setRows]         = useState([]);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');
  const [filter, setFilter]     = useState('All');
  const [search, setSearch]     = useState('');
  const [updating, setUpdating] = useState(null);

  useEffect(() => {
    document.title = 'Admin — Distributor Applications | RDN Bio Products';
  }, []);

  const fetchRows = useCallback(async () => {
    if (!SCRIPT_URL) { setError('SCRIPT_URL not configured — see setup instructions below.'); return; }
    setLoading(true); setError('');
    try {
      const res = await fetch(`${SCRIPT_URL}?secret=${SCRIPT_SECRET}&action=get`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setRows(data);
    } catch (e) {
      setError(`Failed to load: ${e.message}`);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { if (authed) fetchRows(); }, [authed, fetchRows]);

  const login = (e) => {
    e.preventDefault();
    if (pass === ADMIN_PASS) { sessionStorage.setItem('rdn_admin', '1'); setAuthed(true); }
    else { setPassErr(true); setTimeout(() => setPassErr(false), 2000); }
  };

  const updateStatus = async (rowIndex, newStatus) => {
    if (!SCRIPT_URL) return;
    setUpdating(rowIndex);
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'updateStatus', secret: SCRIPT_SECRET, rowIndex, status: newStatus }),
      });
      setRows(prev => prev.map((r, i) => i === rowIndex ? { ...r, Status: newStatus } : r));
    } catch (_) {}
    setUpdating(null);
  };

  const exportCSV = () => {
    const header = COLS.join(',');
    const body = rows.map(r => COLS.map(c => `"${String(r[c] || '').replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([header + '\n' + body], { type: 'text/csv' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = `rdn-distributor-applications-${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
  };

  const visible = rows.filter(r => {
    const matchFilter = filter === 'All' || r.Status === filter;
    const q = search.toLowerCase();
    const matchSearch = !q || Object.values(r).some(v => String(v).toLowerCase().includes(q));
    return matchFilter && matchSearch;
  });

  const counts = ['New', 'Contacted', 'Approved', 'Rejected'].reduce((acc, s) => {
    acc[s] = rows.filter(r => r.Status === s).length; return acc;
  }, {});

  if (!authed) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fdf3' }}>
        <div style={{ background: '#fff', border: '1px solid #dbeec9', borderRadius: 20, padding: '48px 40px', maxWidth: 380, width: '100%', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div style={{ fontSize: 36, marginBottom: 10 }}>🔐</div>
            <h1 style={{ fontSize: 20, fontWeight: 800, color: '#1a3a06', marginBottom: 4 }}>Admin Access</h1>
            <p style={{ fontSize: 13, color: '#888' }}>RDN Bio Products — Distributor Applications</p>
          </div>
          <form onSubmit={login}>
            <input
              type="password"
              placeholder="Admin password"
              value={pass}
              onChange={e => setPass(e.target.value)}
              style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: `2px solid ${passErr ? '#e53935' : '#dbeec9'}`, fontSize: 15, marginBottom: 14, boxSizing: 'border-box', outline: 'none' }}
              autoFocus
            />
            {passErr && <p style={{ color: '#e53935', fontSize: 12, marginBottom: 10, textAlign: 'center' }}>Incorrect password</p>}
            <button type="submit" style={{ width: '100%', padding: '13px', background: '#3e8e1f', color: '#fff', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
              Sign In
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', background: '#f4faf0', padding: '32px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 800, color: '#1a3a06', marginBottom: 2 }}>Distributor Applications</h1>
            <p style={{ fontSize: 13, color: '#888' }}>{rows.length} total · last refreshed {new Date().toLocaleTimeString()}</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={fetchRows} style={{ padding: '9px 18px', background: '#fff', border: '1px solid #dbeec9', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer', color: '#3e8e1f' }}>
              🔄 Refresh
            </button>
            <button onClick={exportCSV} style={{ padding: '9px 18px', background: '#3e8e1f', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer', color: '#fff' }}>
              ⬇ Export CSV
            </button>
            <button onClick={() => { sessionStorage.removeItem('rdn_admin'); setAuthed(false); }} style={{ padding: '9px 18px', background: '#fff', border: '1px solid #ddd', borderRadius: 8, fontSize: 13, color: '#888', cursor: 'pointer' }}>
              Sign out
            </button>
          </div>
        </div>

        {/* Status summary */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))', gap: 14, marginBottom: 24 }}>
          {[{ label: 'Total', value: rows.length, bg: '#fff', color: '#222' },
            { label: 'New', value: counts.New, bg: '#e8f4fd', color: '#1a6fa8' },
            { label: 'Contacted', value: counts.Contacted, bg: '#fff8e1', color: '#a06000' },
            { label: 'Approved', value: counts.Approved, bg: '#e8f5e9', color: '#2e7d32' },
            { label: 'Rejected', value: counts.Rejected, bg: '#fbe9e7', color: '#c62828' },
          ].map(c => (
            <div key={c.label} style={{ background: c.bg, border: '1px solid #dbeec9', borderRadius: 12, padding: '16px 20px', textAlign: 'center', cursor: 'pointer' }} onClick={() => setFilter(c.label === 'Total' ? 'All' : c.label)}>
              <div style={{ fontSize: 26, fontWeight: 800, color: c.color }}>{c.value}</div>
              <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{c.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <input
            placeholder="Search name, city, phone…"
            value={search} onChange={e => setSearch(e.target.value)}
            style={{ padding: '9px 14px', borderRadius: 8, border: '1px solid #dbeec9', fontSize: 13, flex: 1, minWidth: 180 }}
          />
          {['All', 'New', 'Contacted', 'Approved', 'Rejected'].map(s => (
            <button key={s} onClick={() => setFilter(s)} style={{ padding: '8px 16px', borderRadius: 20, border: `1px solid ${filter === s ? '#3e8e1f' : '#dbeec9'}`, background: filter === s ? '#3e8e1f' : '#fff', color: filter === s ? '#fff' : '#555', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
              {s}
            </button>
          ))}
        </div>

        {/* Error / loading */}
        {error && (
          <div style={{ background: '#fbe9e7', border: '1px solid #ef9a9a', borderRadius: 10, padding: '14px 18px', marginBottom: 20, fontSize: 13, color: '#c62828' }}>
            ⚠️ {error}
            {!SCRIPT_URL && (
              <div style={{ marginTop: 12, padding: '14px', background: '#fff', borderRadius: 8, fontFamily: 'monospace', fontSize: 12, lineHeight: 1.8, color: '#333' }}>
                <strong>Setup steps:</strong><br />
                1. Open <a href="https://sheets.google.com" target="_blank" rel="noreferrer" style={{ color: '#1a73e8' }}>sheets.google.com</a> → create new sheet named <em>"RDN Distributor Applications"</em><br />
                2. Click <strong>Extensions → Apps Script</strong> → paste the script from <code>apps-script.gs</code> in this repo<br />
                3. Click <strong>Deploy → New deployment → Web app</strong> → set "Who has access" to <em>Anyone</em> → Deploy<br />
                4. Copy the web app URL<br />
                5. Add to GitHub repo secrets: <code>REACT_APP_SCRIPT_URL=&lt;your URL&gt;</code><br />
                6. Add: <code>REACT_APP_SCRIPT_SECRET=rdn2026secret</code> and <code>REACT_APP_ADMIN_PASS=rdnadmin2026</code>
              </div>
            )}
          </div>
        )}

        {loading && <div style={{ textAlign: 'center', padding: '48px 0', color: '#888' }}>Loading applications…</div>}

        {/* Table */}
        {!loading && visible.length === 0 && !error && (
          <div style={{ textAlign: 'center', padding: '48px 0', color: '#aaa' }}>
            {rows.length === 0 ? 'No applications yet.' : 'No results match your filter.'}
          </div>
        )}

        {!loading && visible.length > 0 && (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 1px 6px rgba(0,0,0,0.05)', fontSize: 13 }}>
              <thead>
                <tr style={{ background: '#1a3a06', color: '#fff' }}>
                  {['Date', 'Name', 'Phone', 'Email', 'City / State', 'Business', 'Experience', 'Volume', 'Status', 'Actions'].map(h => (
                    <th key={h} style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 700, whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visible.map((r, i) => {
                  const realIdx = rows.indexOf(r);
                  return (
                    <tr key={i} style={{ borderBottom: '1px solid #f0f5e8', background: i % 2 === 0 ? '#fff' : '#fafff5' }}>
                      <td style={{ padding: '12px 14px', whiteSpace: 'nowrap', color: '#888', fontSize: 11 }}>
                        {r.Timestamp ? new Date(r.Timestamp).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: '2-digit' }) : '—'}
                      </td>
                      <td style={{ padding: '12px 14px', fontWeight: 600, color: '#222' }}>{r.Name || '—'}</td>
                      <td style={{ padding: '12px 14px' }}>
                        <a href={`tel:${r.Phone}`} style={{ color: '#1a6fa8', textDecoration: 'none' }}>{r.Phone || '—'}</a>
                      </td>
                      <td style={{ padding: '12px 14px', color: '#555', fontSize: 12 }}>{r.Email || '—'}</td>
                      <td style={{ padding: '12px 14px' }}>{r.City}{r.State ? `, ${r.State}` : ''}</td>
                      <td style={{ padding: '12px 14px', maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={r['Business Type']}>{r['Business Type'] || '—'}</td>
                      <td style={{ padding: '12px 14px', whiteSpace: 'nowrap' }}>{r['Experience'] || '—'}</td>
                      <td style={{ padding: '12px 14px', whiteSpace: 'nowrap' }}>{r['Monthly Volume'] || '—'}</td>
                      <td style={{ padding: '12px 14px' }}><Badge status={r.Status || 'New'} /></td>
                      <td style={{ padding: '12px 14px' }}>
                        <select
                          value={r.Status || 'New'}
                          disabled={updating === realIdx}
                          onChange={e => updateStatus(realIdx, e.target.value)}
                          style={{ padding: '5px 8px', borderRadius: 6, border: '1px solid #dbeec9', fontSize: 12, cursor: 'pointer', background: '#fff' }}
                        >
                          {['New', 'Contacted', 'Approved', 'Rejected'].map(s => <option key={s}>{s}</option>)}
                        </select>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p style={{ fontSize: 11, color: '#aaa', textAlign: 'right', marginTop: 8 }}>
              Showing {visible.length} of {rows.length} applications
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
