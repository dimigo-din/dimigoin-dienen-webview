import { createStitches } from '@stitches/react';

export const MAIN_ACCENT = "#149E91"

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            accent: MAIN_ACCENT,
        },
    },
});
