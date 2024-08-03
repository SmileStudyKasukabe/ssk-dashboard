import { COLOR_CODE_REGEX } from "../constants/regex";
import type { ColorCode, Luminance, Rgba } from "../types";

const isLuminance = (v: number): v is Luminance => {
    return 0 <= v && v <= 255;
};
export const isRgba = (arr: number[]): arr is Rgba => {
    return arr.length === 4 && arr.every(isLuminance);
};export function isColorCode(str: string): str is ColorCode {
    return COLOR_CODE_REGEX.test(str);
}

