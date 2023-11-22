/**
 * Represents a PDF document.
 */
export class PDFDocument {
  /**
   * The file path of the document.
   */
  filePath: string = '';

  /**
   * The number of pages in the document.
   */
  pageCount: number = 0;

  /**
   * Indicates whether the document is in color.
   */
  isColor: boolean = false;

  /**
   * Indicates whether the document has ocr or not.
   */
  hasOCR: boolean = false;

  /**
   * The date and time when the document was created.
   */
  createdAt: Date = new Date();

  constructor(pdfDocument?: PDFDocument) {
    if (!pdfDocument) return;
    this.filePath = pdfDocument.filePath;
    this.pageCount = pdfDocument.pageCount;
    this.isColor = pdfDocument.isColor;
    this.hasOCR = pdfDocument.hasOCR;
    this.createdAt = pdfDocument.createdAt;
  }

  /**
   * Gets the file name of the document.
   * @returns The file name of the document.
   */
  get fileName() {
    return this.filePath.split('/').pop() ?? '';
  }

  /**
   * Sets the file name of the document.
   *
   * @param fileName - The new file name.
   */
  set fileName(fileName: string) {
    this.fileName = fileName;
    // TODO: implement
    throw new Error('Not implemented');
  }

  /**
   * Gets the file size of the document.
   * @returns The file size of the document.
   */
  get fileSize() {
    // TODO: implement
    throw new Error('Not implemented');
  }

  share() {
    // TODO: implement
    throw new Error('Not implemented');
  }

  delete() {
    // TODO: implement
    throw new Error('Not implemented');
  }
}

const a = new PDFDocument();
