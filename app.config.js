/* eslint-disable sort-keys */
const IS_DEV = process.env.APP_VARIANT === 'development';

export default {
  expo: {
    name: 'PDFish',
    slug: 'PDFish',
    version: '0.0.1',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: IS_DEV ? 'de.xires.PDFish.dev' : 'de.xires.PDFish',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: IS_DEV ? 'de.xires.PDFish.dev' : 'de.xires.PDFish',
    },
    web: {
      favicon: './assets/favicon.png',
    },
  },
};
