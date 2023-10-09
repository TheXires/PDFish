import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import Navigator from './src/navigation/Navigator';

export default function App() {
  return (
    <>
      <PaperProvider>
        <Navigator />
      </PaperProvider>
      <StatusBar style="auto" />
    </>
  );
}
