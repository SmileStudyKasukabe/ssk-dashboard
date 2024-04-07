export let spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet | undefined;
let sheets: GoogleAppsScript.Spreadsheet.Sheet[] | undefined;

const sheetMap = new Map<number, GoogleAppsScript.Spreadsheet.Sheet>();

export function getSheetById(
    id: number
): GoogleAppsScript.Spreadsheet.Sheet | undefined {
    spreadsheet = spreadsheet ?? SpreadsheetApp?.getActive();
    sheets = sheets ?? spreadsheet?.getSheets();

    if (sheets === undefined) {
        return undefined;
    }

    const sheet = sheetMap.get(id);

    if (sheet === undefined) {
        const sheet = sheets.find((v) => v.getSheetId() === id);

        if (sheet === undefined) {
            return undefined;
        }

        sheetMap.set(id, sheet);
        return sheet;
    }

    return sheet;
}
