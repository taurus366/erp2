import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { NotAuthGuardService } from '../../../../shared/ui/not-auth-guard.service';
import { UserService } from '../../../../shared/ui/user.service';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent, // Main component for this route
    canActivate: [NotAuthGuardService]
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule, // For common Angular directives
    RouterModule.forChild(routes), // Configure child routes
  ],
  providers: [UserService, NotAuthGuardService, provideHttpClient()]
})


export class LoginModule {}

export const AUTH_LOGIN_ROUTE_CONFIG = {
  path: 'login',
  loadChildren: () => import('./login.module').then(m => m.LoginModule)
};
