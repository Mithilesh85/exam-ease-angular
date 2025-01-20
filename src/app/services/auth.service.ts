import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {
    console.log(this.url);
  }

  authenticate = () => {
    return this.http.get(`${this.url}/authenticate`, {
      withCredentials: true,
    });
  };

  register = (payload: any) => {
    return this.http.post(`${this.url}/createUser`, payload, {
      withCredentials: true,
    });
  };
  login = (payload: any) => {
    return this.http.post(`${this.url}/login`, payload, {
      withCredentials: true,
    });
  };

  logout = () => {
    return this.http.get(`${this.url}/logout`, {
      withCredentials: true,
    });
  };
}
