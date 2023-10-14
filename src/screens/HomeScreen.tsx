import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { HomeNavigationProp } from '../types/navigation';

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProp>();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('homeScreen.welcome')}</Text>
      <FAB
        label={t('homeScreen.add')}
        onPress={() => navigation.navigate('Scanner')}
        icon="plus"
        style={styles.fab}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  fab: {
    bottom: 0,
    margin: 16,
    position: 'absolute',
    right: 0,
  },
});
