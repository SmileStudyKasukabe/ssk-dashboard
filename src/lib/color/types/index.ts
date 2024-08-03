import type { Brand } from "$lib/util-types";

export type ColorCode = `#${string}`;

declare const LuminanceSymbol: unique symbol;
export type Luminance = Brand<number, typeof LuminanceSymbol>;

declare const RgbaSymbol: unique symbol;
export type Rgba = Brand<
    [Luminance, Luminance, Luminance, Luminance],
    typeof RgbaSymbol
>;
