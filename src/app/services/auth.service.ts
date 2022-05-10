import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

export interface userInfo {
  id: string;
  name: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public get user(): userInfo {
    return {
      id: '627794b8e6e179ebbf1f6352',
      name: '邊緣小杰',
      image: 'assets/images/users/user.png',
    }
  }

  goToUrl!: string;

  // 取得 access_token
  public get cookie_access_token(): string {
    const searchStr = 'access_token=';
    let access_token = document.cookie.split(';').find(item => item.trim().indexOf(searchStr) > -1);
    return access_token ? access_token.replace(searchStr, '') : '';
  }

  constructor() { }

  logout(): void {
    // 刪除 cookie
    this.changeCookie();
  }

  // 改變 cookie
  changeCookie(access_token?: string) {
    const days = access_token ? 3 : -1; // cookie 儲存天數
    let exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    let cookie = `access_token=${access_token}; expires=${exp.toUTCString()}; path=/; SameSite=Strict;`;
    if (environment.production) { cookie += `Secure` };
    document.cookie = cookie;
  }
}
