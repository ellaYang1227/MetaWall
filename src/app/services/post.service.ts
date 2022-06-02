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

  // 1.取得所有貼文
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

  // 2.取得單一貼文
  getPost(postID: string, filter?: any): Observable<any> {
    let url = '';
    for (const key in filter) {
      if (filter[key]) {
        url += url ? '&' : '?';
        url += `${key}=${filter[key]}`;
      }
    }

    return this.http.get<any[]>(`${this.API_ROOT}posts/${postID}${url}`, this.getHeader())
      .pipe(map(result => this.covertReturn(result)), catchError(error => {
        this.covertReturn(error.error);
        return of(false);
      }));
  }

  // 3.新增單筆貼文
  addPost(body: post): Observable<any> {
    return this.http.post<any>(this.API_ROOT + 'posts', body, this.getHeader())
      .pipe(map(result => result), catchError(error => {
        return of(this.covertReturn(error.error));
      }));
  }

  // 4.新增一則貼文的讚
  addPostLike(postID: string): Observable<any> {
    return this.http.post<any>(`${this.API_ROOT}posts/${postID}/like`, '', this.getHeader())
      .pipe(map(result => result), catchError(error => {
        return of(this.covertReturn(error.error));
      }));
  }

  // 5.取消一則貼文的讚
  postUnlike(postID: string): Observable<any> {
    return this.http.delete<any>(`${this.API_ROOT}posts/${postID}/unlike`, this.getHeader())
      .pipe(map(result => result), catchError(error => {
        return of(this.covertReturn(error.error));
      }));
  }

  // 6.新增一則貼文的留言
  addPostComment(postID: string, comment: string): Observable<any> {
    return this.http.post<any>(`${this.API_ROOT}posts/${postID}/comment`, { comment }, this.getHeader())
      .pipe(map(result => this.covertReturn(result)), catchError(error => {
        return of(this.covertReturn(error.error));
      }));
  }

  // 7.取得個人所有貼文列表
  getUserPosts(userID: string, filter: any): Observable<any> {
    let url = '';
    for (const key in filter) {
      if (filter[key]) {
        url += url ? '&' : '?';
        url += `${key}=${filter[key]}`;
      }
    }

    return this.http.get<any[]>(this.API_ROOT + 'posts/user/' + userID + url, this.getHeader())
      .pipe(map(result => this.covertReturn(result)), catchError(error => {
        this.covertReturn(error.error);
        return of(false);
      }));
  }

  // (額外)刪除所有貼文
  delPosts(): Observable<any> {
    return this.http.delete<any>(`${this.API_ROOT}posts`, this.getHeader())
      .pipe(map(result => result), catchError(error => {
        return of(this.covertReturn(error.error));
      }));
  }

  // (額外)刪除單筆貼文
  delPost(postID: string): Observable<any> {
    return this.http.delete<any>(`${this.API_ROOT}posts/${postID}`, this.getHeader())
      .pipe(map(result => result), catchError(error => {
        return of(this.covertReturn(error.error));
      }));
  }

  // (額外)編輯單筆貼文
  editPost(postID: string, body: post): Observable<any> {
    return this.http.patch<any>(`${this.API_ROOT}posts/${postID}`, body, this.getHeader())
      .pipe(map(result => result), catchError(error => {
        return of(this.covertReturn(error.error));
      }));
  }
}
