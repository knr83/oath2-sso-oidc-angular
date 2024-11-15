import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authUrl = 'http://localhost:8000/auth';

  constructor(private http: HttpClient) {
  }

  login(): Observable<any> {
    return this.http.get(`${this.authUrl}/login`);
  }

  handleAuthCallback(code: string): Observable<any> {
    return this.http.get(`${this.authUrl}/callback?code=${code}`).pipe(
      tap((response: any) => {
        if (response.access_token) {
          localStorage.setItem('access_token', response.access_token);  // Store the token
        }
      })
    );
  }

  getAccessToken(): string | null {
    return localStorage.getItem('access_token');  // Retrieve the token
  }
}
