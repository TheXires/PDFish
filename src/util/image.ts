import * as ImagePicker from 'expo-image-picker';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import DocumentScanner, { ResponseType } from 'react-native-document-scanner-plugin';

/**
 * Opens the image library and allows the user to select an image.
 * 
 * @returns A promise that resolves to the URI of the selected image, or undefined if no image was selected.
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
 * Scans a new document using the document scanner. This includes the option to let the user adjust the crop area. If the user does not grant camera permissions, an alert is shown.
 * 
 * @returns A promise that resolves to the path of the scanned image file, or undefined if no image was scanned.
 */
export const scanNewDocument = async (): Promise<string | undefined> => {
  if (
    Platform.OS === 'android' &&
    (await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)) !==
      PermissionsAndroid.RESULTS.GRANTED
  ) {
    // TODO translate
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
