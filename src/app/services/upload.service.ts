import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, map, Observable, of } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService extends BaseService {

  constructor(
    private http: HttpClient,
    override spinner: NgxSpinnerService
  ) {
    super(spinner);
  }

  upload(body: FileList, unit: 'user' | 'post' = 'post'): Observable<any> {
    return this.http.post<any>(`${this.API_ROOT}upload?unit=${unit}`, this.covertFormData({ file: body }), this.getHeader())
      .pipe(map(result => result), catchError(error => {
        return of(this.covertReturn(error.error));
      }));
  }
}
