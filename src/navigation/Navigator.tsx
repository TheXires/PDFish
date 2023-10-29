import { NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import ScannerScreen from '../screens/ScannerScreen';
import { RootStackParamList } from '../types/navigation';
import BottomNavigator from './BottomNavigator';

const AuthStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator<RootStackParamList>();

interface Props {
  theme: Theme;
  requiresAuthentication: boolean;
}

export default function Navigator({ theme, requiresAuthentication }: Props) {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(true);

  useEffect(() => {
    if (requiresAuthentication) setIsAuthorized(false);
  }, []);

  return (
    <NavigationContainer theme={theme}>
      {!isAuthorized ? (
        <AuthStack.Navigator initialRouteName="Auth">
          <AuthStack.Screen name="Auth" options={{ headerShown: false }}>
            {() => <AuthenticationScreen isAuthenticationSuccessful={setIsAuthorized} />}
          </AuthStack.Screen>
        </AuthStack.Navigator>
      ) : (
        <RootStack.Navigator>
          <RootStack.Screen
            name="Main"
            component={BottomNavigator}
            options={{ animation: 'none' }}
          />
          <RootStack.Screen
            name="Scanner"
            component={ScannerScreen}
            options={{ animation: 'slide_from_bottom', headerShown: false }}
          />
        </RootStack.Navigator>
      )}
    </NavigationContainer>
  );
}
