// import {Injectable} from '@angular/core';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {Observable} from 'rxjs';
// import {AuthService} from './auth.service';
//
// @Injectable()
// export class AuthHttp {
//   constructor(private http: HttpClient) {
//   }
//
//   get<T>(url: string, options = {}): Observable<T> {
//     options['headers'] = AuthHttp.createHeaders().headers;
//
//     return this.http.get<T>(url, options);
//   }
//
//   getAsPlainText(url: string, options = {}): Observable<string> {
//     options['headers'] = AuthHttp.createHeaders().headers;
//     options['responseType'] = 'text';
//
//     return this.http.get<string>(url, options);
//   }
//
//   post<T>(url: string, body: any): Observable<T> {
//     return this.http.post<T>(url, body, AuthHttp.createHeaders());
//   }
//
//   put<T>(url: string, body: any): Observable<T> {
//     return this.http.put<T>(url, body, AuthHttp.createHeaders());
//   }
//
//   delete<T>(url: string): Observable<T> {
//     return this.http.delete<T>(url, AuthHttp.createHeaders());
//   }
//
//   private static createHeaders() {
//     return {headers: new HttpHeaders().set('Authorization', 'Bearer ' + AuthService.getToken())};
//   }
// }
