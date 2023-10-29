import { MMKV } from 'react-native-mmkv';
import {
  mmkvKeys,
  presentationSettingsDefaults,
  securitySettingsDefaults,
} from '../types/userSettings';

export const settingsStorage = new MMKV();

/**
 *  Sets default settings
 */
export const setDefaultUserSettings = (overWriteCurrentSettings: boolean = false): void => {
  if (settingsStorage.getBoolean(mmkvKeys.settings.isInitialized) && !overWriteCurrentSettings)
    return;

  // Set ini
  settingsStorage.set(mmkvKeys.settings.isInitialized, true);

  // Set default settings
  settingsStorage.set(mmkvKeys.settings.presentation, JSON.stringify(presentationSettingsDefaults));
  settingsStorage.set(mmkvKeys.settings.security, JSON.stringify(securitySettingsDefaults));
};
