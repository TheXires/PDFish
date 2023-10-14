import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import * as Localization from 'expo-localization';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import translator from './src/i18n/i18next';
import Navigator from './src/navigation/Navigator';
import getCombinedTheme from './src/util/theme';

export default function App() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  useEffect(() => {
    translator.changeLanguage(Localization.locale);
  }, []);

  const combinedTheme = getCombinedTheme(theme, colorScheme);

  return (
    <>
      <I18nextProvider i18n={translator}>
        <PaperProvider theme={combinedTheme}>
          <Navigator theme={combinedTheme} />
        </PaperProvider>
      </I18nextProvider>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </>
  );
}
