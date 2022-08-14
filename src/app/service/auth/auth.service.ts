import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Login } from '@models/login';
import { User } from '@models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  BACKEND_URL = environment.BACKEND_URL;

  constructor(private http: HttpClient) {}

  login(login: Login) {
    return this.http.post<{ user?: User; message: string; jwt: string | null  }>(
      `${this.BACKEND_URL}auth/`,
      login
    );
  }

  userSignup(userDetail: FormData) {
    return this.http.post<{ user?: User; message: string; jwt: string | null }>(
      `${this.BACKEND_URL}auth/signup-student`,
      userDetail
    );
  }

  addMentor(mentor: User) {
    return this.http.post<{
      user: User | null;
      message: string;
      jwt: string | null;
    }>(`${this.BACKEND_URL}auth/signup-mentor`, mentor);
  }
}
