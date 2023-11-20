import { getBase64Image, saveFile } from '../util/file';
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


/**
 * Converts an image to PDF.
 * 
 * @param image - The image to convert, either as a base64 string or a URI.
 * @param fileType - The type of the image file.
 * @returns A Promise that resolves to the path of the converted PDF file, or undefined if an error occurs.
 */
export const convertToPdf = async (
  image: string,
  fileType: FileType,
): Promise<string | undefined> => {
  try {
    let base64Image = image;
    if (fileType === FileType.URI) base64Image = await getBase64Image(image);
    const res = await axiosInstance.post('/', { image: base64Image });
    const path = await saveFile(res.data, 'test.pdf');
    return path;
  } catch (error) {
    // TODO: add proper error handling
    console.error(error);
  }
  return undefined;
};
