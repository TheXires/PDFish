import { Image } from 'expo-image';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { selectImage } from '../util/image';

export default function ScannerScreen() {
  const { t } = useTranslation();

  const [imageUri, setImageUri] = useState<string | undefined>(undefined);

  const handleImageSelection = async () => {
    const uri = await selectImage();
    setImageUri(uri);
  };

  return (
    <View style={styles.container}>
      <Text>{t('screen.scanner.title')}</Text>
      <Button onPress={handleImageSelection}>Test scan</Button>
      {imageUri && <Image style={styles.image} source={imageUri} contentFit="contain" />}
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
