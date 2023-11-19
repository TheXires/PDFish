import * as FileSystem from 'expo-file-system';
import { axiosInstance } from './axios';

export enum FileType {
  BASE64 = 'BASE64',
  URI = 'URI',
}

/**
 * Send image to server to convert it to pdf
 *
 * @param image
 * @param fileType
 * @returns
 */
export const convertToPdf = async (image: string, fileType: FileType) => {
  try {
    let base64Image = image;

    if (fileType === FileType.URI) {
      const base64File = await FileSystem.readAsStringAsync(image, {
        encoding: FileSystem.EncodingType.Base64,
      });
      base64Image = `data:image/jpeg;base64,${base64File}`;
    }

    const res = await axiosInstance.post('/', { image: base64Image });

    // TODO: handle response

    return res.data;
  } catch (error) {
    // TODO: add proper error handling
    console.error(error);
  }
};
