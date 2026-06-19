// ─────────────────────────────────────────────────────────────────
// RDN Bio Products — Distributor Applications Google Apps Script
// Deploy as: Web App → Execute as: Me → Who has access: Anyone
// After deploy, copy the web app URL into REACT_APP_SCRIPT_URL
// ─────────────────────────────────────────────────────────────────

var SHEET_NAME = 'Applications';
var SECRET     = 'rdn2026secret'; // must match REACT_APP_SCRIPT_SECRET

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['Timestamp','Name','Phone','Email','City','State','Business Type','Experience','Monthly Volume','Message','Status']);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, 11).setFontWeight('bold');
  }
  return sh;
}

function doPost(e) {
  var cors = ContentService.createTextOutput();
  cors.setMimeType(ContentService.MimeType.JSON);

  try {
    var data = JSON.parse(e.postData.contents);

    if (data.secret !== SECRET) {
      cors.setContent(JSON.stringify({ error: 'Unauthorized' }));
      return cors;
    }

    var sh = getSheet();

    if (data.action === 'updateStatus') {
      // rowIndex is 0-based from the React table (data rows only, header excluded)
      var row = parseInt(data.rowIndex) + 2; // +1 for header, +1 for 1-based index
      sh.getRange(row, 11).setValue(data.status); // column 11 = Status
      cors.setContent(JSON.stringify({ ok: true }));
      return cors;
    }

    // Default: save new application
    sh.appendRow([
      new Date().toISOString(),
      data.Name        || '',
      data.Phone       || '',
      data.Email       || '',
      data.City        || '',
      data.State       || '',
      data['Business Type']          || '',
      data['Distribution Experience']|| '',
      data['Target Monthly Volume']  || '',
      data.Message     || '',
      'New',
    ]);

    cors.setContent(JSON.stringify({ ok: true }));
  } catch (err) {
    cors.setContent(JSON.stringify({ error: err.message }));
  }
  return cors;
}

function doGet(e) {
  var cors = ContentService.createTextOutput();
  cors.setMimeType(ContentService.MimeType.JSON);

  if (!e.parameter || e.parameter.secret !== SECRET) {
    cors.setContent(JSON.stringify({ error: 'Unauthorized' }));
    return cors;
  }

  try {
    var sh = getSheet();
    var data = sh.getDataRange().getValues();
    var headers = data[0];
    var rows = [];
    for (var i = 1; i < data.length; i++) {
      var row = {};
      for (var j = 0; j < headers.length; j++) {
        var val = data[i][j];
        // Convert Date objects to ISO string for JSON transport
        row[headers[j]] = val instanceof Date ? val.toISOString() : val;
      }
      rows.push(row);
    }
    cors.setContent(JSON.stringify(rows));
  } catch (err) {
    cors.setContent(JSON.stringify({ error: err.message }));
  }
  return cors;
}
