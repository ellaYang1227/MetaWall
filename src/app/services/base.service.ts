import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { AuthService } from '@services/auth.service';
import { SwalDefaultService } from '@services/swal-default.service';

let swalPopup: any;

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  API_ROOT = environment.api;

  constructor() {
    swalPopup = SwalDefaultService.prototype.popupDefault;
  }

  getHeader(): {} {
    const access_token = AuthService.prototype.cookie_access_token;

    if (access_token) {
      let header: HttpHeaders;
      header = new HttpHeaders().set('Authorization', access_token);
      if (!environment.production) {
        header = new HttpHeaders()
          .set('Authorization', access_token)
          .set('Debug', '1');
      }
      return {
        headers: header
      };
    } else {
      return {};
    }
  }

  covertFormData(data: any): FormData {
    let result = new FormData();
    for (const key in data) {
      result.append(key, data[key]);
    }
    return result;
  }

  covertReturn(data: any): any {
    if (data.success) {
      return data.data;
    } else {

      const swal: any = {};
      const error = data.error.toLowerCase();
      if (error.indexOf('token') > -1) {
        swal.title = '系統訊息';
        swal.error = '連線逾時，請重新登入';
        swal.logout = true;
      } else if (error.indexOf('wrong auth') > -1) {
        console.error('err');
        swal.title = '系統訊息';
        swal.error = '非本人帳號，無法執行或讀取';
        swal.back = true;
      } else {
        swal.title = '不明錯誤';
        swal.error = 'API Error, Message:' + data.error;
        swal.back = true;
        console.error('API ERROR, Message：' + data.error);
      }

      if (swal.title || swal.msg) {
        swalPopup.fire({
          title: swal.title,
          text: swal.msg,
          icon: 'error',
          allowOutsideClick: false,
          showConfirmButton: swal.title === '不明錯誤' ? true : false,
          showCancelButton: swal.title === '不明錯誤' ? false : true,
          confirmButtonText: '回上一頁',
          cancelButtonText: '確認',
          customClass: {
            confirmButton: 'btn btn-outline-secondary',
            cancelButton: 'btn btn-outline-secondary'
          },
          buttonsStyling: false,
          timer: swal.title !== '不明錯誤' ? 5000 : null,
          timerProgressBar: swal.title !== '不明錯誤' ? true : false
        }).then((result: any) => {
          if (result.value || swal.back) {
            window.history.back();
          }

          if (swal.logout) {
            AuthService.prototype.logout();
            AuthService.prototype.goToUrl = '/member/login';
          }

          return false;
        });
      }
    }
  }
}
