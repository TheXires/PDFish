/**
 * Keys to access settings groups in MMKV Storage
 */
export const mmkvKeys = {
  settings: {
    isInitialized: 'settings.isInitialized',
    presentation: 'settings.presentation',
    security: 'settings.security',
  },
};

// Presentation Settings
export type LanguageType = 'system' | 'de' | 'en';
export const languageOptions = ['system', 'de', 'en']; // system first, afterwards alphabetical

export type ThemeType = 'system' | 'dark' | 'light';
export const themeOptions: ThemeType[] = ['system', 'dark', 'light']; // system first, afterwards alphabetical

export interface presentationSettings {
  language: LanguageType;
  theme: ThemeType;
}

export const presentationSettingsDefaults: presentationSettings = {
  language: 'system',
  theme: 'system',
};


// Security Settings
export interface securitySettings {
  isProtected: boolean;
}

export const securitySettingsDefaults: securitySettings = {
  isProtected: false,
};
