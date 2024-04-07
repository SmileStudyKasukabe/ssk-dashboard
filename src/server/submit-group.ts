import { v4 as createUuid } from "uuid";
import { appendRows } from "./utils/append-rows";
import { getSheetById } from "./utils/sheet-instance-cache";
import { SHEET_ID_CLASSROOMS } from "../constants/sheetId";
import { type Result, err, ok } from "../lib/utils/result";

export const submitGroup = (
    name: string,
    ids: string[]
): Result<undefined, Error> => {
    const sheet = getSheetById(SHEET_ID_CLASSROOMS);

    if (sheet === undefined) {
        return err(
            new Error(`Unknown sheet id was specified ${SHEET_ID_CLASSROOMS}`)
        );
    }

    appendRows(sheet, [[createUuid(), name, ...ids]] as const);

    return ok(undefined);
};

export const mockSubmitGroup = (): Result<undefined, Error> => {
    return ok(undefined);
};
