import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';

/**
 * opens gallery to select a picture
 *
 * @returns image file url on success, otherwise undefined
 */
export const selectImage = async (): Promise<string | undefined> => {
  try {
    const selectedImage = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
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
