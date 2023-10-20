import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Divider, List, Switch, Text } from 'react-native-paper';
import RadioButtonDialog from '../components/RadioButtonDialog';

const languages = ['Deutsch', 'Englisch'];
const themes = ['light', 'dark', 'system'];

export default function SettingsScreen() {
  const { t } = useTranslation();

  const [toggled, setToggled] = useState<boolean>(false);
  const [showLanguageDialog, setShowLanguageDialog] = useState<boolean>(false);
  const [showThemeDialog, setShowThemeDialog] = useState<boolean>(false);
  const [theme, setTheme] = useState(themes[0]);
  const [language, setLanguage] = useState(languages[0]);

  return (
    <View style={styles.container}>
      <Text>{t('SettingsScreen.title')}</Text>
      <ScrollView>
        <List.Item
          title="Test(Biometrics)"
          right={() =>
            Switch({
              onChange: () => setToggled((prev) => !prev),
              value: toggled,
            })
          }
          style={{ flex: 1, justifyContent: 'space-between' }}
        />
        <Divider />
        <List.Item
          title="Test(Sprache)"
          style={{ flex: 1, justifyContent: 'space-between' }}
          onPress={() => setShowLanguageDialog(true)}
        />
        <Divider />
        <List.Item
          title="Test(Theme)"
          style={{ flex: 1, justifyContent: 'space-between' }}
          onPress={() => setShowThemeDialog(true)}
        />
        <RadioButtonDialog
          title="ToDd(LanguageDialog)"
          visible={showLanguageDialog}
          onDismiss={() => setShowLanguageDialog(false)}
          onSave={() => setShowLanguageDialog(false)}
          options={languages}
          value={language}
          setValue={setLanguage}
        />
        <RadioButtonDialog
          title="ToDd(ThemeDialog)"
          visible={showThemeDialog}
          onDismiss={() => setShowThemeDialog(false)}
          onSave={() => setShowThemeDialog(false)}
          options={themes}
          value={theme}
          setValue={setTheme}
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
