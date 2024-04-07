import { v4 as createUuid } from "uuid";
import { appendRows } from "./utils/append-rows";
import { getSheetById } from "./utils/sheet-instance-cache";
import { SHEET_ID_TEACHERS } from "../constants/sheetId";
import { type Result, err, ok } from "../lib/utils/result";

export const submitTeacher = (
    familyName: string,
    givenName: string,
    personalColor: string
): Result<undefined, Error> => {
    const sheet = getSheetById(SHEET_ID_TEACHERS);

    if (sheet === undefined) {
        return err(
            new Error(`Unknown sheet id was specified ${SHEET_ID_TEACHERS}`)
        );
    }

    appendRows(sheet, [
        [
            createUuid(),
            `${familyName}${givenName}`,
            familyName,
            givenName,
            personalColor,
            0,
            0,
        ],
    ] as const);

    return ok(undefined);
};

export const mockSubmitTeacher = (): Result<undefined, Error> => {
    return ok(undefined);
};
