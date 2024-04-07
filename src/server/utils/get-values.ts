import { assert } from "$lib/utils/assert";
import type { SheetValue } from "../../types/sheet";

export function getValues(
    sheet: GoogleAppsScript.Spreadsheet.Sheet
): Record<string, SheetValue>[] {
    const rawValues = sheet.getDataRange().getValues();

    const headers = rawValues.slice(0, 1)[0].map((v, i, arr) => {
        if (v && v !== "") {
            return String(v);
        } else {
            const header = arr.slice(0, i).findLast((w) => w && w !== "");
            assert(
                header !== undefined,
                `There're only empty headers in array ${arr}`
            );
            return String(header);
        }
    });

    const values = rawValues.slice(1) as SheetValue[][];

    return values.map((arr) => {
        return arr.reduce((acc, v, i) => {
            acc[headers[i]] = v;
            return acc;
        }, {} as Record<string, SheetValue>);
    });
}
