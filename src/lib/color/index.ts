import type { Rgba, ColorCode } from "./types/index";

import { assert } from "$lib/assert";
import { err, ok, type Result } from "$lib/result";

import { COLOR_CODE_REGEX } from "./constants/regex";
import { BLACK, WHITE } from "./constants/color";
import { isRgba } from "./utils/type-guard";

// 人間の視覚特性にあった輝度に変換する
const getAccessibleLuminance = (luminance: Rgba[number]): number => {
    const result = luminance / 255;
    if (result <= 0.03928) {
        return result / 12.92;
    } else {
        return Math.pow((result + 0.055) / 1.055, 2.4);
    }
};

// 相対輝度に変換する
const getRelativeLuminance = (rgba: Rgba) => {
    const [r, g, b] = rgba;
    const R = getAccessibleLuminance(r);
    const G = getAccessibleLuminance(g);
    const B = getAccessibleLuminance(b);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
};

const getContrastRatio = (color1: Rgba, color2: Rgba) => {
    const luminance1 = getRelativeLuminance(color1);
    const luminance2 = getRelativeLuminance(color2);
    const bright = Math.max(luminance1, luminance2);
    const dark = Math.min(luminance1, luminance2);
    return (bright + 0.05) / (dark + 0.05);
};

const BLACK_RGBA = hexToRGBA(BLACK).expect("Never failures");
const WHITE_RGBA = hexToRGBA(WHITE).expect("Never failures");

// #XXX(XXX(XX)) を RGBA に変換する
export function hexToRGBA(colorCode: string): Result<Rgba, Error> {
    const matched = COLOR_CODE_REGEX.exec(colorCode);
    if (matched === null) {
        return err(
            Error(`"${colorCode}" didn't match "${COLOR_CODE_REGEX.source}".`)
        );
    }

    // `colorCode` should be "#XXX(XXX(XX))"
    const rgb = matched.at(1);
    const alpha = matched.at(2);

    assert(rgb, "Rgb should be string, but undefined");

    const result = (
        rgb.length === 3
            ? [rgb[0].repeat(2), rgb[1].repeat(2), rgb[2].repeat(2), "FF"]
            : [rgb.slice(0, 2), rgb.slice(2, 4), rgb.slice(4, 6), alpha ?? "FF"]
    ).map((v) => parseInt(v, 16));

    assert(isRgba(result), `${result} should be an Rgba array, but not.`);

    return ok(result);
}

// 背景色に合わせた文字色のスタイルを返す
export function calcTextColorByBg(
    backgroundColor: string
): Result<ColorCode, Error> {
    const color = hexToRGBA(backgroundColor);

    if (color.isErr()) {
        return err(color.error);
    }

    const darkRatio = getContrastRatio(color.value, BLACK_RGBA);
    const lightRatio = getContrastRatio(color.value, WHITE_RGBA);

    return lightRatio > darkRatio ? ok(WHITE) : ok(BLACK);
}
