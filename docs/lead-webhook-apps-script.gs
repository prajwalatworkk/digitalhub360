/**
 * DigitalHub360 lead webhook — paste this into Apps Script attached to the leads sheet:
 * https://docs.google.com/spreadsheets/d/1_aIrppCgmjeecFPfrawPe7Rm9kYQEZvgjeg6fiNe4p8/
 *
 * Setup (one time, ~3 minutes):
 * 1. Open the sheet → Extensions → Apps Script
 * 2. Delete any starter code, paste this whole file, hit Save
 * 3. Click Deploy → New deployment → type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Click Deploy, authorize when prompted, and copy the Web app URL (ends in /exec)
 * 5. That URL is your SHEET_WEBHOOK_URL — give it to Claude / put it in Vercel env vars
 */

var SHEET_NAME = "Leads";

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Submitted At", "Name", "Phone", "Email", "Service / Goal", "Budget", "Message"]);
      sheet.getRange(1, 1, 1, 7).setFontWeight("bold");
    }

    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.name || "",
      data.phone || "",
      data.email || "",
      data.goal || "",
      data.budget || "",
      data.message || ""
    ]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
      ContentService.MimeType.JSON
    );
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) })).setMimeType(
      ContentService.MimeType.JSON
    );
  } finally {
    lock.releaseLock();
  }
}
