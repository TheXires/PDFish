import { LanguageType } from '../types/userSettings';

export const getSelectedLanguage = (
  languageSetting: LanguageType | undefined,
  systemLanguage: string,
) => {
  if (!languageSetting || languageSetting === 'system') return systemLanguage;
  return languageSetting;
};
