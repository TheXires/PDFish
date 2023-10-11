import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ScannerScreen() {
  return (
    <View style={styles.container}>
      <Text>ScannerScreen</Text>
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
