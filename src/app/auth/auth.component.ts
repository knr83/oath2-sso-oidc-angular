import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  template: `
    <button (click)="login()">Login with OAuth2</button>
    <div *ngIf="message">{{ message }}</div>
  `,
  imports: [
    NgIf
  ]
})

export class AuthComponent {
  message: string | null = null;

  constructor(private authService: AuthService) {
  }

  login() {
    this.authService.login().subscribe({
      next: (data) => {
        // Redirect to the authorization URL
        window.location.href = data.auth_url;
      },
      error: (err) => console.error('Login failed', err),
    });
  }

  // This method handles the callback from the backend to check authentication status
  checkAuthCallback(code: string) {
    this.authService.handleAuthCallback(code).subscribe({
      next: (response) => {
        this.message = response.message;
      },
      error: () => {
        this.message = 'ACCESS DENIED (Angular)';
      },
    });
  }
}
