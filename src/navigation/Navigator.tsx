import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ScannerScreen from '../screens/ScannerScreen';
import { RootStackParamList } from '../types/navigation';
import BottomNavigator from './BottomNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator() {
  return (
    <NavigationContainer>
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
