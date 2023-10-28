import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useMMKVBoolean, useMMKVString } from 'react-native-mmkv';
import { List, Switch } from 'react-native-paper';
import RadioButtonDialog from '../components/RadioButtonDialog';
import {
  KEY_SETTINGS_IS_PROTECTED,
  KEY_SETTINGS_LANGUAGE,
  KEY_SETTINGS_THEME,
  languageOptions,
  themeOptions,
} from '../types/userSettings';

export default function SettingsScreen() {
  const { t } = useTranslation();

  const [isProtected, setIsProtected] = useMMKVBoolean(KEY_SETTINGS_IS_PROTECTED);
  const [showLanguageDialog, setShowLanguageDialog] = useState<boolean>(false);
  const [showThemeDialog, setShowThemeDialog] = useState<boolean>(false);
  const [theme, setTheme] = useMMKVString(KEY_SETTINGS_THEME);
  const [language, setLanguage] = useMMKVString(KEY_SETTINGS_LANGUAGE);

  return (
    <View style={styles.container}>
      <ScrollView>
        <List.Section>
          <List.Subheader>{t('screen.settings.security')}</List.Subheader>
          <List.Item
            title={t('screen.settings.biometric')}
            right={() =>
              Switch({
                onChange: () => setIsProtected((prev) => !prev),
                value: isProtected,
              })
            }
            style={{ flex: 1, justifyContent: 'space-between' }}
          />
        </List.Section>
        <List.Section>
          <List.Subheader>{t('screen.settings.presentation')}</List.Subheader>
          <List.Item
            title={t('screen.settings.language')}
            right={() => List.Icon({ icon: 'chevron-right' })}
            style={{ flex: 1, justifyContent: 'space-between' }}
            onPress={() => setShowLanguageDialog(true)}
          />
          <List.Item
            title={t('screen.settings.theme')}
            right={() => List.Icon({ icon: 'chevron-right' })}
            style={{ flex: 1, justifyContent: 'space-between' }}
            onPress={() => setShowThemeDialog(true)}
          />
        </List.Section>
        <RadioButtonDialog
          title={t('screen.settings.language')}
          visible={showLanguageDialog}
          onDismiss={() => setShowLanguageDialog(false)}
          onSave={() => setShowLanguageDialog(false)}
          options={languageOptions}
          value={language ?? 'system'}
          setValue={setLanguage}
          translationPrefix="screen.settings.languageOptions."
        />
        <RadioButtonDialog
          title={t('screen.settings.theme')}
          visible={showThemeDialog}
          onDismiss={() => setShowThemeDialog(false)}
          onSave={() => setShowThemeDialog(false)}
          options={themeOptions}
          value={theme ?? 'system'}
          setValue={setTheme}
          translationPrefix="screen.settings.themeOptions."
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
