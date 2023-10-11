import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { HomeNavigationProp } from '../types/navigation';

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProp>();

  return (
    <View style={styles.container}>
      <Text>Welcome to PDFish!</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Scanner')}>
        Test
      </Button>
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
