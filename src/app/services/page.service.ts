import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';

export interface PageBlock {
  command: string;
  data: any;
}

export const PageServiceRegist = [
  'components.header.visible',
  'components.right-nav.visible'
];

@Injectable({
  providedIn: 'root'
})
export class PageService {

  [name: string]: any;

  private Source = new BehaviorSubject<PageBlock>({} as PageBlock);
  private Storage: { [name: string]: any } = {};
  constructor(
  ) {
    // 從註冊表中預定義屬性
    PageServiceRegist.forEach(item => this.define(item));
  }

  /**
   * 設定接收資料的監聽處理
   * @param command 資料鍵值；屬性名稱
   * @param funcDo  接到資料後執行後製的函數
   */
  listen(command: string, funcDo?: (d: any) => any, defaultValue?: any) {
    if (!Object.prototype.hasOwnProperty.call(this, command)) {
      this.define(command, defaultValue);
    }
    this.Source.asObservable().subscribe(m => {
      if (m.command === command) {
        if (typeof funcDo === 'function') {
          funcDo(m.data);
        }
        this.Storage[command] = m.data;
      }
    });
  }
  /**
   * 定義屬性值
   * @param command 資料鍵值；屬性名稱
   */
  define(command: string, defaultValue?: any): any {
    if (Object.prototype.hasOwnProperty.call(this, command)) {
      return throwError('The property, "' + command + '", exists!!!');
    }
    Object.defineProperty(this, command, {
      get: () => {
        if (!this.Storage[command]) {
          return defaultValue;
        }
        return this.Storage[command];
      },
      set: (value: any) => {
        this.Storage[command] = value;
        this.send(command, value);
      }
    });
  }
  /**
   * 送出資料
   * @param command 指定送出資料名稱
   * @param data 資料內容
   */
  private send(command: string, data: any) {
    if (!Object.prototype.hasOwnProperty.call(this, command)) {
      this.define(command);
    }
    this.Source.next({
      command: command,
      data: data
    } as PageBlock);
  }
}
