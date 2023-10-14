import { Material3Theme } from '@pchmn/expo-material3-theme';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import merge from 'deepmerge';
import { ColorSchemeName } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';

export default function getCombinedTheme(theme: Material3Theme, selectedScheme: ColorSchemeName) {
  const adaptiveNavigationTheme = adaptNavigationTheme({
    materialDark: { ...MD3DarkTheme, colors: theme.dark },
    materialLight: { ...MD3LightTheme, colors: theme.light },
    reactNavigationDark: NavigationDarkTheme,
    reactNavigationLight: NavigationDefaultTheme,
  });

  return selectedScheme === 'dark'
    ? merge(adaptiveNavigationTheme.DarkTheme, { ...MD3DarkTheme, colors: theme.dark })
    : merge(adaptiveNavigationTheme.LightTheme, { ...MD3LightTheme, colors: theme.light });
}
