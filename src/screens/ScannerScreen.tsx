import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function ScannerScreen() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={{ color: theme.colors.onSurface }}>{t('ScannerScreen.title')}</Text>
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
