import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ScannerScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ScannerScreen</Text>
    </View>
  );
};

export default ScannerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
