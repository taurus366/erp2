import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Login Page</h1>
    <p>Enter your credentials to log in.</p>
  `,
  // templateUrl: './login.component.html',
  // styleUrls: ['./login.component.scss']
})

export class LoginComponent {}
