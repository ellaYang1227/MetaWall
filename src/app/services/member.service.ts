import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, map, of } from 'rxjs';
import { BaseService } from './base.service';
import { SwalDefaultService } from './swal-default.service';

let swalToast: any;

export interface signUp {
  name: string,
  email: string,
  password: string
}

export interface signIn {
  email: string,
  password: string
}

export interface updatePassword {
  newPassword: string,
  confirmPassword: string
}

export interface editName {
  photo: any,
  name: string,
  sex: string
}

@Injectable({
  providedIn: 'root'
})
export class MemberService extends BaseService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private swalDefaultService: SwalDefaultService,
    override spinner: NgxSpinnerService
  ) {
    super(spinner);
    swalToast = this.swalDefaultService.toastDefault;
  }

  signUp(body: signUp) {
    return this.http.post<any>(this.API_ROOT + 'users/sign_up', body)
      .pipe(map(result => {
        if (result.success) {
          this.authService.changeCookie(result.data.token);
          this.router.navigate(['/index']);
        }
      }), catchError(error => {
        console.error(error.error);
        return of(error.error);
      }));
  }

  signIn(body: signIn) {
    return this.http.post<any>(this.API_ROOT + 'users/sign_in', body)
      .pipe(map(result => {
        if (result.success) {
          this.authService.changeCookie(result.data.token);
          const redirectUrl = this.authService.redirectUrl;
          this.router.navigate([redirectUrl ? redirectUrl : '/index']);
        }
      }), catchError(error => {
        console.error(error.error);
        return of(error.error);
      }));
  }

  updatePassword(body: updatePassword) {
    return this.http.post<any>(this.API_ROOT + 'users/updatePassword', body, this.getHeader())
      .pipe(map(result => result), catchError(error => {
        return of(this.covertReturn(error.error));
      }));
  }

  getProfile() {
    return this.http.get<any>(this.API_ROOT + 'users/profile', this.getHeader())
      .pipe(map(result => this.covertReturn(result)), catchError(error => {
        this.covertReturn(error.error);
        return of(false);
      }));
  }

  updateProfile(body: editName) {
    return this.http.patch<any>(this.API_ROOT + 'users/profile', body, this.getHeader())
      .pipe(map(result => result), catchError(error => {
        return of(this.covertReturn(error.error));
      }));
  }
}
