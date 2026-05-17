/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: "#0D1B2A",
    background: "#F8FAFC",
    tint: "#2F80ED",
    icon: "#94A3B8",
    tabIconDefault: "#94A3B8",
    tabIconSelected: "#2F80ED",

    primary: "#2F80ED",
    dark: "#0D1B2A",
    success: "#27AE60",
    danger: "#EB5757",
    white: "#FFFFFF",
    gray: "#E5E7EB",
    card: "#FFFFFF",
  },

  dark: {
    text: "#FFFFFF",
    background: "#0D1B2A",
    tint: "#2F80ED",
    icon: "#94A3B8",
    tabIconDefault: "#94A3B8",
    tabIconSelected: "#2F80ED",

    primary: "#2F80ED",
    dark: "#0D1B2A",
    success: "#27AE60",
    danger: "#EB5757",
    white: "#FFFFFF",
    gray: "#334155",
    card: "#1E293B",
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
