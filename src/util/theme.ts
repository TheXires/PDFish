import { Material3Theme } from '@pchmn/expo-material3-theme';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import merge from 'deepmerge';
import { ColorSchemeName } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';

const adaptiveNavigationTheme = adaptNavigationTheme({
  reactNavigationDark: NavigationDarkTheme,
  reactNavigationLight: NavigationDefaultTheme,
});

export default function getCombinedTheme(theme: Material3Theme, selectedScheme: ColorSchemeName) {
  return selectedScheme === 'dark'
    ? merge({ ...MD3DarkTheme, colors: theme.dark }, adaptiveNavigationTheme.DarkTheme)
    : merge({ ...MD3LightTheme, colors: theme.light }, adaptiveNavigationTheme.LightTheme);
}
