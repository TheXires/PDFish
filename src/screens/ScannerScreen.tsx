import { Image } from 'expo-image';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { FileType, convertToPdf } from '../api/convert';
import { scanNewDocument, selectImage } from '../util/image';

export default function ScannerScreen() {
  const { t } = useTranslation();

  const [imageUri, setImageUri] = useState<string | undefined>(undefined);

  return (
    <View style={styles.container}>
      <Text>{t('screen.scanner.title')}</Text>
      <Button onPress={async () => setImageUri(await selectImage())}>Select Image</Button>
      <Button onPress={async () => setImageUri(await scanNewDocument())}>Scan Document</Button>
      {imageUri && (
        <>
          <Image style={styles.image} source={imageUri} contentFit="contain" />
          <Button onPress={() => convertToPdf(imageUri, FileType.URI)}>Test scan</Button>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    backgroundColor: '#0553',
    height: 500,
    width: '100%',
  },
});
