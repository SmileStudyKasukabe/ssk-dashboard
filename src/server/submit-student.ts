import { v4 as createUuid } from "uuid";
import { appendRows } from "./utils/append-rows";
import { getSheetById } from "./utils/sheet-instance-cache";
import { submitGroup } from "./submit-group";
import { SHEET_ID_STUDENTS } from "../constants/sheetId";
import { type Grade, getOffsetYearFromGradeId } from "../utils/grades";
import { type Result, err, ok } from "../lib/utils/result";

export const submitStudent = (
    name: string,
    grade: Grade,
    comiruId: number
): Result<undefined, Error> => {
    const sheet = getSheetById(SHEET_ID_STUDENTS);

    if (sheet === undefined) {
        return err(
            new Error(`Unknown sheet id was specified ${SHEET_ID_STUDENTS}`)
        );
    }

    const offsetYear = getOffsetYearFromGradeId(grade);
    const studentId = createUuid();

    appendRows(sheet, [
        [
            studentId,
            name,
            offsetYear, // (year + 1) of the student was "小1"
            comiruId,
        ],
    ] as const);

    const groupResult = submitGroup(name, [studentId]);

    if (groupResult.isErr()) {
        return groupResult;
    }

    return ok(undefined);
};

export const mockSubmitStudent = (): Result<undefined, Error> => {
    return ok(undefined);
};
