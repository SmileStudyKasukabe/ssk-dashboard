export const GRADES = [
    "小1",
    "小2",
    "小3",
    "小4",
    "小5",
    "小6",
    "中1",
    "中2",
    "中3",
    "高1",
    "高2",
    "高3",
    "既卒",
] as const;

export type Grade = (typeof GRADES)[number];

export function isGrade(str: string): str is Grade {
    return GRADES.includes(str as never);
}

export function getOffsetYearFromGradeId(grade: Grade) {
    const today = new Date();
    const fiscalYear =
        today.getMonth() <= 3 ? today.getFullYear() - 1 : today.getFullYear();

    return fiscalYear - GRADES.findIndex((v) => v === grade);
}
