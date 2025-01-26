import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent, // Main component for this route
    canActivate: []
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, // For common Angular directives
    RouterModule.forChild(routes), // Configure child routes
  ],
})


export class LoginModule {}

export const AUTH_LOGIN_ROUTE_CONFIG = {
  path: 'login',
  loadChildren: () => import('./login.module').then(m => m.LoginModule)
};
