import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, map, Observable, of } from 'rxjs';
import { BaseService } from './base.service';

export interface post {
  image: any;
  content: string;
}

@Injectable({
  providedIn: 'root'
})

export class PostService extends BaseService {

  constructor(
    private http: HttpClient,
    override spinner: NgxSpinnerService
  ) {
    super(spinner);
  }

  getPosts(filter: any): Observable<any> {
    let url = '';
    for (const key in filter) {
      if (filter[key]) {
        url += url ? '&' : '?';
        url += `${key}=${filter[key]}`;
      }
    }

    return this.http.get<any[]>(this.API_ROOT + 'posts' + url, this.getHeader())
      .pipe(map(result => this.covertReturn(result)), catchError(error => {
        this.covertReturn(error.error);
        return of(false);
      }));
  }

  addPost(body: post) {
    return this.http.post<any>(this.API_ROOT + 'posts', body, this.getHeader())
      .pipe(map(result => result), catchError(error => {
        return of(this.covertReturn(error.error));
      }));
  }
}
