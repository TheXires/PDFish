import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'react-native-paper';

export default function SettingsScreen() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={{ color: theme.colors.onSurface }}>{t('SettingsScreen.title')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
