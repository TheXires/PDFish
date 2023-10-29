import * as LocalAuthentication from 'expo-local-authentication';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useMMKVObject } from 'react-native-mmkv';
import { List, Switch } from 'react-native-paper';
import RadioButtonDialog from '../components/RadioButtonDialog';
import {
  LanguageType,
  ThemeType,
  languageOptions,
  mmkvKeys,
  presentationSettings as presentationSettingsType,
  securitySettings as securitySettingsType,
  themeOptions,
} from '../types/userSettings';

export default function SettingsScreen() {
  const { t } = useTranslation();

  const [securitySettings, setSecuritySettings] = useMMKVObject<securitySettingsType>(
    mmkvKeys.settings.security,
  );
  const [showLanguageDialog, setShowLanguageDialog] = useState<boolean>(false);
  const [showThemeDialog, setShowThemeDialog] = useState<boolean>(false);
  const [presentationSettings, setPresentationSettings] = useMMKVObject<presentationSettingsType>(
    mmkvKeys.settings.presentation,
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        {securitySettings && (
          <List.Section>
            <List.Subheader>{t('screen.settings.security')}</List.Subheader>
            <List.Item
              title={t('screen.settings.biometric')}
              right={() =>
                Switch({
                  onChange: async () => {
                    const res = await LocalAuthentication.authenticateAsync();
                    if (res.success) {
                      return setSecuritySettings({
                        ...securitySettings,
                        isProtected: !securitySettings.isProtected,
                      });
                    }
                  },
                  value: securitySettings?.isProtected,
                })
              }
            />
          </List.Section>
        )}
        <List.Section>
          <List.Subheader>{t('screen.settings.presentation')}</List.Subheader>
          <List.Item
            title={t('screen.settings.language')}
            right={() => List.Icon({ icon: 'chevron-right' })}
            onPress={() => setShowLanguageDialog(true)}
            disabled={!presentationSettings}
          />
          <List.Item
            title={t('screen.settings.theme')}
            right={() => List.Icon({ icon: 'chevron-right' })}
            onPress={() => setShowThemeDialog(true)}
            disabled={!presentationSettings}
          />
        </List.Section>
        {presentationSettings && (
          <>
            <RadioButtonDialog
              title={t('screen.settings.language')}
              visible={showLanguageDialog}
              onDismiss={() => setShowLanguageDialog(false)}
              onSave={(newSettings: string) => {
                setShowLanguageDialog(false);
                const temp = {
                  ...presentationSettings,
                  language: newSettings as LanguageType,
                };
                setPresentationSettings(temp);
              }}
              options={languageOptions}
              startValue={presentationSettings.language}
              translationPrefix="screen.settings.languageOptions."
            />
            <RadioButtonDialog
              title={t('screen.settings.theme')}
              visible={showThemeDialog}
              onDismiss={() => setShowThemeDialog(false)}
              onSave={(newSettings: string) => {
                setShowThemeDialog(false);
                setPresentationSettings({
                  ...presentationSettings,
                  theme: newSettings as ThemeType,
                });
              }}
              options={themeOptions}
              startValue={presentationSettings.theme}
              translationPrefix="screen.settings.themeOptions."
            />
          </>
        )}
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
