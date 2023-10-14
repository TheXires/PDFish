import { NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ScannerScreen from '../screens/ScannerScreen';
import { RootStackParamList } from '../types/navigation';
import BottomNavigator from './BottomNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

interface Props {
  theme: Theme;
}

export default function Navigator({ theme }: Props) {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomNavigator} options={{ animation: 'none' }} />
        <Stack.Screen
          name="Scanner"
          component={ScannerScreen}
          options={{ animation: 'slide_from_bottom', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
