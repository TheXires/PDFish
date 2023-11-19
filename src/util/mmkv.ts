import { MMKV } from 'react-native-mmkv';
import {
  mmkvKeys,
  presentationSettingsDefaults,
  securitySettingsDefaults,
} from '../types/userSettings';

export const settingsStorage = new MMKV();

/**
 * Sets the default user settings in the settings storage.
 * If `overWriteCurrentSettings` is set to `false` and the settings are already initialized, the function will return early without making any changes.
 * @param overWriteCurrentSettings - Whether to overwrite the current settings if they are already initialized.
 */
export const setDefaultUserSettings = (overWriteCurrentSettings: boolean = false): void => {
  if (settingsStorage.getBoolean(mmkvKeys.settings.isInitialized) && !overWriteCurrentSettings)
    return;

  settingsStorage.set(mmkvKeys.settings.isInitialized, true);

  settingsStorage.set(mmkvKeys.settings.presentation, JSON.stringify(presentationSettingsDefaults));
  settingsStorage.set(mmkvKeys.settings.security, JSON.stringify(securitySettingsDefaults));
};
