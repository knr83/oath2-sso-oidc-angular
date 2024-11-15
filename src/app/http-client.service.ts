import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private http: HttpClient, private authService: AuthService) {
  }

  get(url: string) {
    const token = this.authService.getAccessToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(url, {headers});
  }
}
