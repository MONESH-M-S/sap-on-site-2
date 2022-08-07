import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Login } from '@models/login';
import { Mentor } from '@models/mentor';
import { User } from '@models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  BACKEND_URL = environment.BACKEND_URL;
  
  constructor(private http: HttpClient) {}

  login(login: Login) {
    return this.http.post<{ user?: User; message: string; mentor?: Mentor }>(
      `${this.BACKEND_URL}auth/login`,
      login
    );
  }
}
