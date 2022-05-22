import * as CryptoJS from 'crypto-js';

export class CryptoJsService {

  constructor() {
  }

  // Base64 解密
  decrypt(text: string): any {
    const textSplit = text.split('.');
    const decryptData = JSON.parse(CryptoJS.enc.Base64.parse(textSplit[1]).toString(CryptoJS.enc.Utf8));
    return decryptData;
  }
}
