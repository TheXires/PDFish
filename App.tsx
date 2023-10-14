import * as Localization from 'expo-localization';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { PaperProvider } from 'react-native-paper';
import translator from './src/i18n/i18next';
import Navigator from './src/navigation/Navigator';

export default function App() {
  useEffect(() => {
    translator.changeLanguage(Localization.locale);
  }, []);

  return (
    <>
      <I18nextProvider i18n={translator}>
        <PaperProvider>
          <Navigator />
        </PaperProvider>
      </I18nextProvider>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
    </>
  );
}
