import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { CryptoJsService } from '@models/crypto-js-service';
export interface userInfo {
  id: string;
  name: string;
  photo: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userDefaultImg = 'assets/images/user_default.png';
  access_token!: string;

  public get user(): userInfo | undefined {
    if (this.cookie_access_token) {
      if (this.access_token !== this.cookie_access_token) { this.access_token = this.cookie_access_token }
      const user = this.cryptoJsService.decrypt(this.cookie_access_token);
      if (!user.photo) { user.photo = this.userDefaultImg }
      return user;
    } else {
      if (this.access_token) { location.reload() }
      localStorage.removeItem('access_token');
      return undefined;
    }
  }

  redirectUrl!: string;

  // 取得 access_token
  public get cookie_access_token(): string {
    const searchStr = 'access_token=';
    let access_token = document.cookie.split(';').find(item => item.trim().indexOf(searchStr) > -1);
    return access_token ? access_token.replace(searchStr, '') : '';
  }

  constructor(
    private cryptoJsService: CryptoJsService
  ) { }

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

    if (access_token) {
      localStorage.setItem('access_token', access_token);
    } else {
      localStorage.removeItem('access_token');
    }
  }
}
