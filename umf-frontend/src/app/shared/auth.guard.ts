// import {Injectable} from '@angular/core';
// import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
// import {AuthService} from './auth.service';
//
// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router, private authService: AuthService) {
//   }
//
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     return this.checkLogin(state.url);
//   }
//
//   private checkLogin(url: string): boolean {
//     if (AuthService.isLoggedIn()) {
//       return true;
//     } else {
//       this.authService.redirectUrl = url;
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }
