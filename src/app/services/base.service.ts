import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { AuthService } from '@services/auth.service';
import { SwalDefaultService } from '@services/swal-default.service';
import { NgxSpinnerService } from 'ngx-spinner';

let swalPopup: any;

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  API_ROOT = environment.api;

  constructor(
    public spinner: NgxSpinnerService
  ) {
    swalPopup = SwalDefaultService.prototype.popupDefault;
  }

  getHeader(): {} {
    const access_token = AuthService.prototype.cookie_access_token;

    if (access_token) {
      let header: HttpHeaders;
      header = new HttpHeaders().set('Authorization', access_token);
      if (!environment.production) {
        header = new HttpHeaders()
          .set('Authorization', `Bearer ${access_token}`);
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
      this.spinner.hide();

      const swal: any = {};
      const error = (data.type || data.message);
      if (error.indexOf('未登入') > -1 || error.indexOf('axios') > -1 ||
        error.indexOf('路由') > -1 || error.indexOf('語法') > -1 || error.indexOf('系統錯誤') > -1) {
        swal.title = '系統訊息';
        swal.msg = data.message;
        if (error.indexOf('未登入') > -1) { swal.logout = true }
      } else {
        console.error(data);
        return data;
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
          timer: swal.title !== '不明錯誤' ? 5000 : null
        }).then((result: any) => {
          if (result.value || swal.back) {
            window.history.back();
          }

          if (swal.logout) {
            AuthService.prototype.logout();
            AuthService.prototype.redirectUrl = window.location.href;
          }

          return false;
        });
      }
    }
  }
}
