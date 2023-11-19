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
    extra: {
      eas: {
        projectId: 'ad974b1e-0b66-4cf4-90e4-0bab4eb9880c',
      },
    },
    plugins: [
      [
        'expo-local-authentication',
        {
          faceIDPermission: 'Allow $(PRODUCT_NAME) to use Face ID.',
        },
      ],
      [
        'expo-image-picker',
        {
          photosPermission:
            'Allow $(PRODUCT_NAME) to accesses your photos create PDFs out of them.',
        },
      ],
      [
        'expo-build-properties',
        {
          android: {
            usesCleartextTraffic: true,
          },
        },
      ],
      [
        'react-native-document-scanner-plugin',
        {
          cameraPermission: 'We need camera access, so you can scan documents',
        },
      ],
    ],
  },
};
