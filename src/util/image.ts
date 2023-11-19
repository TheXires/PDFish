import * as ImagePicker from 'expo-image-picker';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import DocumentScanner, { ResponseType } from 'react-native-document-scanner-plugin';

/**
 * Open gallery to select an image
 *
 * @returns image file url on success, otherwise undefined
 */
export const selectImage = async (): Promise<string | undefined> => {
  try {
    const selectedImage = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });
    if (!selectedImage.assets) return undefined;
    return selectedImage.assets[0].uri;
  } catch (error) {
    Alert.alert('Error');
    console.error(error);
  }
  return undefined;
};

/**
 * Open camera to take a picture of a document and crop it
 * 
 * @returns 
 */
export const scanNewDocument = async (): Promise<string | undefined> => {
  if (
    Platform.OS === 'android' &&
    (await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)) !==
      PermissionsAndroid.RESULTS.GRANTED
  ) {
    Alert.alert('Error', 'User must grant camera permissions to use document scanner.');
    return;
  }

  const { scannedImages } = await DocumentScanner.scanDocument({
    letUserAdjustCrop: true,
    responseType: ResponseType.ImageFilePath,
  });

  if (scannedImages && scannedImages.length > 0) return scannedImages[0];
  return undefined;
};
