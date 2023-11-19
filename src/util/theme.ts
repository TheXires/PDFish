import { Material3Theme } from '@pchmn/expo-material3-theme';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import merge from 'deepmerge';
import { ColorSchemeName } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';
import { ThemeType } from '../types/userSettings';

/**
 * Returns the combined color Theme for react native paper and react navigation, based on the app settings.
 * This also considers the material you theme selected by the user (android only) or falls back to a default set.
 *
 * @param materialTheme - The material theme object.
 * @param selectedTheme - The selected theme type.
 * @param systemTheme - The system color scheme name.
 * @returns The combined theme object.
 */
export default function getCombinedTheme(
  materialTheme: Material3Theme,
  selectedTheme: ThemeType | undefined,
  systemTheme: ColorSchemeName,
) {
  const theme = getSelectedTheme(selectedTheme, systemTheme);

  const adaptiveNavigationTheme = adaptNavigationTheme({
    materialDark: { ...MD3DarkTheme, colors: materialTheme.dark },
    materialLight: { ...MD3LightTheme, colors: materialTheme.light },
    reactNavigationDark: NavigationDarkTheme,
    reactNavigationLight: NavigationDefaultTheme,
  });

  return theme === 'dark'
    ? merge(adaptiveNavigationTheme.DarkTheme, { ...MD3DarkTheme, colors: materialTheme.dark })
    : merge(adaptiveNavigationTheme.LightTheme, { ...MD3LightTheme, colors: materialTheme.light });
}

/**
 * Returns the selected theme based on the provided theme settings and the current system theme.
 * It defaults to `dark` in case the theme is unclear.
 *
 * @param themeSettings - The theme settings to determine the selected theme.
 * @param currentSystemTheme - The current system theme.
 * @returns The selected theme, either 'dark' or 'light'.
 */
export const getSelectedTheme = (
  themeSettings: ThemeType | undefined,
  currentSystemTheme: ColorSchemeName,
): 'dark' | 'light' => {
  switch (themeSettings) {
    case 'system':
      return currentSystemTheme ?? 'dark';
    case 'dark':
      return 'dark';
    case 'light':
      return 'light';
    default:
      return 'dark';
  }
};
