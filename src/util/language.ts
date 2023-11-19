import { LanguageType } from '../types/userSettings';

/**
 * Returns the selected language based on the language setting and system language.
 * If the language setting is undefined or set to 'system', the system language is returned.
 * Otherwise, the language setting is returned.
 *
 * @param languageSetting - The selected language setting.
 * @param systemLanguage - The system language.
 * @returns The selected language.
 */
export const getSelectedLanguage = (
  languageSetting: LanguageType | undefined,
  systemLanguage: string,
) => {
  if (!languageSetting || languageSetting === 'system') return systemLanguage;
  return languageSetting;
};
