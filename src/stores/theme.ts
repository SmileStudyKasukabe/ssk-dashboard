import { writable } from "svelte/store";
import LS_KEYS from "../constants/local-storage-keys";
import { isThemeKeys, type ThemeKey } from "../utils/theme";
import { browser } from "$app/environment";

export const currentTheme = writable<ThemeKey>("LIGHT");

currentTheme.update((v) => {
    if (!browser) {
        return v;
    }

    const themeKey = localStorage.getItem(LS_KEYS.THEME_KEY);

    if (themeKey && isThemeKeys(themeKey)) {
        return themeKey;
    }

    return v;
});

currentTheme.subscribe((v) => {
    if (browser) {
        localStorage.setItem(LS_KEYS.THEME_KEY, v);
    }
});
