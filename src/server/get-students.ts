import { SHEET_ID_STUDENTS } from "../constants/sheetId";
import { type Result, err, ok } from "../lib/utils/result";
import type { StudentRecord } from "../types/record";
import { getSheetById } from "./utils/sheet-instance-cache";

export function getStudents(): Result<StudentRecord[], Error> {
    const sheet = getSheetById(SHEET_ID_STUDENTS);

    if (sheet === undefined) {
        return err(
            new Error(`Unknown sheet id was specified ${SHEET_ID_STUDENTS}`)
        );
    }

    const students = sheet
        .getDataRange()
        .getValues()
        .map((arr) => ({
            id: arr[0],
            name: arr[1],
            offsetYear: arr[2],
            comiruId: arr[3],
        }));

    return ok(students);
}

export function mockGetStudents(): ReturnType<typeof getStudents> {
    const dummyData: StudentRecord[] = [];
    for (let i = 0; i < 10; i++) {
        dummyData.push({
            id: `${i}`,
            name: `名前_${i}`,
            offsetYear: new Date().getFullYear() - 12 + i,
            comiruId: i,
        });
    }

    return ok(dummyData);
}
