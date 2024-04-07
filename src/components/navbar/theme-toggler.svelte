<script lang="ts">
    import Sun from "../assets/svg/sun.svelte";
    import Moon from "../assets/svg/moon.svelte";

    import { THEMES, THEME_KEYS, type ThemeKey } from "../../utils/theme";
    import { currentTheme } from "../../stores/theme";

    let theme: ThemeKey = THEME_KEYS[0];
    $: isDarkTheme = (theme as ThemeKey) === THEME_KEYS[1];

    const toggleTheme = () => {
        currentTheme.update((v) => {
            theme = v === THEME_KEYS[0] ? THEME_KEYS[1] : THEME_KEYS[0];
            return theme;
        });
    };

    currentTheme.subscribe((v) => {
        theme = v;
    });
</script>

<label class="swap swap-rotate">
    <input
        type="checkbox"
        class="theme-controller"
        value={THEMES.DARK}
        checked={isDarkTheme}
        on:click={toggleTheme}
    />
    <Sun />
    <Moon />
</label>
