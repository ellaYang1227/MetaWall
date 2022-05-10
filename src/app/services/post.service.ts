import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { catchError, map, Observable, of } from 'rxjs';
import { BaseService } from './base.service';
import { SwalDefaultService } from './swal-default.service';

let swalToast: any;

export interface post {
  user?: string;
  image: any;
  content: string;
}

@Injectable({
  providedIn: 'root'
})

export class PostService extends BaseService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private swalDefaultService: SwalDefaultService
  ) {
    super();
    swalToast = this.swalDefaultService.toastDefault;
  }

  getPosts(filter: any): Observable<any> {
    let url = '';
    for (const key in filter) {
      if (filter[key]) {
        url += url ? '&' : '?';
        url += `${key}=${filter[key]}`;
      }
    }

    return this.http.get<any[]>(this.API_ROOT + 'posts' + url)
      .pipe(map(result => this.covertReturn(result)), catchError(error => {
        this.covertReturn(error.error);
        return of(false);
      }));
  }

  addPost(body: post) {
    body.user = this.authService.user.id;
    return this.http.post<any>(this.API_ROOT + 'posts', body)
      .pipe(map(result => {
        if (result.success) {
          swalToast.fire({
            icon: 'success',
            title: '新增成功'
          }).then((result: any) => {
            this.router.navigate(['/index']);
          });
        }
      }), catchError(error => {
        swalToast.fire({
          icon: 'error',
          title: '新增失敗'
        });

        return of(false);
      }));
  }
}
