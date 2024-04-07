import themeNames from "../config/themes.json";

export const THEME_KEYS = [
  "LIGHT",
  "DARK",
] as const;

export function isThemeKeys(key: string): key is ThemeKey {
  return THEME_KEYS.includes(key as never);
}

export type ThemeKey = typeof THEME_KEYS[number];
type Themes = {
  [key in ThemeKey]: string;
};

const DEFAULT_THEMES: Themes = {
  LIGHT: "light",
  DARK: "dark",
} as const;

const isThemeArray = (arr: any): arr is readonly [string, string] =>
  Array.isArray(arr) &&
  typeof arr[0] === "string" &&
  typeof arr[1] === "string";

export const THEMES: Themes = isThemeArray(themeNames)
  ? {
    LIGHT: themeNames[0],
    DARK: themeNames[1],
  } as const
  : DEFAULT_THEMES;
