import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import * as Localization from 'expo-localization';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { useColorScheme } from 'react-native';
import { useMMKVObject } from 'react-native-mmkv';
import { PaperProvider } from 'react-native-paper';
import translator from './src/i18n/i18next';
import Navigator from './src/navigation/Navigator';
import {
  mmkvKeys,
  presentationSettings as presentationSettingsType,
  securitySettings as securitySettingsType,
} from './src/types/userSettings';
import { getSelectedLanguage } from './src/util/language';
import { setDefaultUserSettings, settingsStorage } from './src/util/mmkv';
import getCombinedTheme, { getSelectedTheme } from './src/util/theme';

export default function App() {
  const colorScheme = useColorScheme();
  // type error in @pchmn/expo-material3-theme
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { theme: materialTheme } = useMaterial3Theme();

  const [securitySettings] = useMMKVObject<securitySettingsType>(mmkvKeys.settings.security);
  const [presentationSetting] = useMMKVObject<presentationSettingsType>(
    mmkvKeys.settings.presentation,
  );

  useEffect(() => {
    if (!settingsStorage.getBoolean(mmkvKeys.settings.isInitialized)) {
      setDefaultUserSettings();
    }
  }, []);

  // App theme
  const combinedTheme = getCombinedTheme(materialTheme, presentationSetting?.theme, colorScheme);

  // App language
  const appLanguage = getSelectedLanguage(presentationSetting?.language, Localization.locale);
  translator.changeLanguage(appLanguage);

  return (
    <>
      <I18nextProvider i18n={translator}>
        <PaperProvider theme={combinedTheme}>
          <Navigator
            theme={combinedTheme}
            requiresAuthentication={securitySettings?.isProtected ?? false}
          />
        </PaperProvider>
      </I18nextProvider>
      <StatusBar
        style={
          getSelectedTheme(presentationSetting?.theme, colorScheme) === 'dark' ? 'light' : 'dark'
        }
      />
    </>
  );
}
