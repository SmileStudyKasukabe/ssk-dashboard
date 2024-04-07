import { assert } from "../../lib/utils/assert";

export function appendRows(
    sheet: GoogleAppsScript.Spreadsheet.Sheet,
    rows: (string | number | boolean | Date)[][]
) {
    if (rows.length <= 0) {
        return;
    }

    const rowsCount = rows.length;
    const columnsCount = rows.at(0)?.length;

    assert(columnsCount && columnsCount > 0);

    const values = sheet.getDataRange().getValues();

    const rowStart = values.length;

    sheet.getRange(rowStart, 1, rowsCount, columnsCount).setValues(rows);
}
