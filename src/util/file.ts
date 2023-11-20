import * as FileSystem from 'expo-file-system';
import { Buffer } from 'buffer';

/**
 * Saves the file data as a file with the specified file name.
 * @param fileData - The data of the file to be saved.
 * @param fileName - The name of the file.
 * @returns A promise that resolves to the file URI of the saved file.
 * @throws If there is an error while saving the file.
 */
export const saveFile = async (fileData: Uint8Array, fileName: string): Promise<string> => {
  try {
    const fileUri = `${FileSystem.documentDirectory}${fileName}`;
    const fileDataString = Buffer.from(fileData).toString('base64');
    await FileSystem.writeAsStringAsync(fileUri, fileDataString, {
      encoding: FileSystem.EncodingType.Base64,
    });
    return fileUri;
  } catch (error) {
    console.error('Error saving file:', error);
    throw error;
  }
};

/**
 * Ensures that a directory exists at the specified path.
 * If the directory does not exist, it will be created.
 *
 * @param path - The path of the directory to ensure.
 * @returns A Promise that resolves to the path of the directory.
 * @throws If there is an error ensuring the directory exists.
 */
export const ensureDirExists = async (path: string): Promise<string> => {
  try {
    const dirInfo = await FileSystem.getInfoAsync(path);
    if (!dirInfo.exists) {
      await FileSystem.makeDirectoryAsync(path, { intermediates: true });
    }
    return path;
  } catch (error) {
    console.error('Error ensuring directory exists:', error);
    throw error;
  }
};

/**
 * Gets the base64 representation of an image at the specified path.
 * @param path - The path of the image.
 * @returns A promise that resolves to the base64 representation of the image.
 * @throws If there is an error getting the base64 representation of the image.
 */
export const getBase64Image = async (path: string) => {
  try {
    const base64File = await FileSystem.readAsStringAsync(path, {
      encoding: FileSystem.EncodingType.Base64,
    });
    return `data:image/jpeg;base64,${base64File}`;
  } catch (error) {
    console.error('Error getting base64 representation:', error);
    throw error;
  }
};
