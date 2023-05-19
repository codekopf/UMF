import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'users', component: UsersComponent
      },
      {
        path: 'users/{$id}', component: UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
