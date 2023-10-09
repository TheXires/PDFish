import { NativeStackNavigationProp } from '@react-navigation/native-stack';

/**
 * Type containing all screens for rootStack
 */
export type RootStackParamList = {
  Home: undefined;
  Scanner: undefined;
};

// RootStackNavigator
export type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type ScannerNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Scanner'>;
