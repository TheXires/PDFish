import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { BottomTabParamList } from '../types/navigation';

const MainTab = createMaterialBottomTabNavigator<BottomTabParamList>();

export default function BottomNavigator() {
  return (
    <MainTab.Navigator initialRouteName="Home">
      <MainTab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: 'home' }} />
      <MainTab.Screen name="Settings" component={SettingsScreen} options={{ tabBarIcon: 'cog' }} />
    </MainTab.Navigator>
  );
}
