import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';

export default function ScannerScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('ScannerScreen.title')}</Text>
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
