import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    // {provide: APP_BASE_HREF, useValue: '/'},
    // AuthHttp,
    // AuthService,
    // AuthGuard,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
