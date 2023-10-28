import React from 'react';
import { useTranslation } from 'react-i18next';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { BottomTabParamList } from '../types/navigation';

const MainTab = createMaterialBottomTabNavigator<BottomTabParamList>();

export default function BottomNavigator() {
  const { t } = useTranslation();

  return (
    <MainTab.Navigator initialRouteName="Home">
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: 'home', title: t('screen.home.title') }}
      />
      <MainTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarIcon: 'cog', title: t('screen.settings.title') }}
      />
    </MainTab.Navigator>
  );
}
