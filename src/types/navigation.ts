import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

/**
 * Type containing all screens for bottomTab
 */
export type BottomTabParamList = {
  Home: undefined;
  Settings: undefined;
};

/**
 * BottomTabNavigator
 */
export type HomeNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList, 'Home'>,
  ScannerNavigationProp
>;

/**
 * Type containing all screens for rootStack
 */
export type RootStackParamList = {
  Main: NavigatorScreenParams<BottomTabParamList>;
  Scanner: undefined;
};

/**
 * RootStackNavigator
 */
export type MainNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;
export type ScannerNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Scanner'>;
