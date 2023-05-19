// import {Injectable} from '@angular/core';
// import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
// import {TokenData} from './token-data';
// import {Router} from '@angular/router';
// import {environment} from '../../environments/environment';
// import {JwtHelperService} from '@auth0/angular-jwt';
// import {Observable} from 'rxjs';
// import {catchError, map, tap} from 'rxjs/operators';
// import {errorObject} from 'rxjs/internal-compatibility';
//
// @Injectable()
// export class AuthService {
//
//   redirectUrl: string;
//
//   private static jwtHelper: JwtHelperService = new JwtHelperService();
//   private static AUTH_KEY = 'access_token';
//
//   constructor(private http: HttpClient, private router: Router) {
//   }
//
//   public static markAsAuthorized(token: string) {
//     localStorage.setItem(AuthService.AUTH_KEY, token);
//   }
//
//   public static markAsUnAuthorized() {
//     localStorage.removeItem(AuthService.AUTH_KEY);
//   }
//
//   public static getToken(): string {
//     return localStorage.getItem(AuthService.AUTH_KEY);
//   }
//
//   public static decodeToken(token: string): TokenData {
//     if (token === undefined) {
//       return undefined;
//     }
//     return this.jwtHelper.decodeToken(token);
//   }
//
//   public static decodeCurrentToken(): TokenData {
//     return AuthService.decodeToken(localStorage.getItem(AuthService.AUTH_KEY));
//   }
//
//   public static hasPermission(permission: string): boolean {
//     return AuthService.decodeCurrentToken().authorities.indexOf(permission) > -1;
//   }
//
//   public static isLoggedIn(): boolean {
//     const token = AuthService.getToken();
//     return token !== undefined && token !== null && !AuthService.jwtHelper.isTokenExpired(token);
//   }
//
//   public login(username: string, password: string): Observable<string> {
//     const credentials = new HttpParams()
//       .set('grant_type', 'password')
//       .set('client_id', 'umf-frontend')
//       .set('username', username)
//       .set('password', password);
//
//     const headers = new HttpHeaders()
//       .set('Content-Type', 'application/x-www-form-urlencoded')
//       .set('Authorization', 'Basic ' + environment.CLIENT_SECRET);
//
//     const response = this.http.post(
//       environment.API + '/oauth/token', credentials.toString(), {
//         headers: headers
//       }).pipe(
//       map(res => {
//         return (<any>res).access_token;
//       }),
//       tap(token =>
//         AuthService.markAsAuthorized(token)),
//       catchError(error => {
//         AuthService.markAsUnAuthorized();
//         return errorObject(error);
//       }));
//     return response;
//   }
//
//   public logout() {
//     AuthService.markAsUnAuthorized();
//     this.redirectUrl = undefined;
//     this.router.navigate(['login']);
//   }
//
// }
