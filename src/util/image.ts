import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
import axios from 'axios';

/**
 * opens gallery to select a picture
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
    return selectedImage.assets[0].base64 ?? '';
  } catch (error) {
    Alert.alert('Error');
    console.error(error);
  }
  return undefined;
};

export const scanImage = async (imageB64: string) => {
  try {
    const res = await axios.post('http://192.168.178.50:4456', { image: imageB64 });
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};
