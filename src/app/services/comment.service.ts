import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, map, Observable, of } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService extends BaseService {

  constructor(
    private http: HttpClient,
    override spinner: NgxSpinnerService
  ) {
    super(spinner);
  }

  // (額外)刪除一則貼文的留言
  delComment(commentID: string): Observable<any> {
    return this.http.delete<any>(`${this.API_ROOT}comments/${commentID}`, this.getHeader())
      .pipe(map(result => result), catchError(error => {
        return of(this.covertReturn(error.error));
      }));
  }
}
