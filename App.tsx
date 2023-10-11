import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import Navigator from './src/navigation/Navigator';

export default function App() {
  return (
    <>
      <PaperProvider>
        <Navigator />
      </PaperProvider>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
    </>
  );
}
