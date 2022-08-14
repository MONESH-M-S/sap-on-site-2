import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { User } from '@models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  BACKEND_URL = environment.BACKEND_URL;

  constructor(private http: HttpClient) {}

  getUserDetailById(id: string) {
    return this.http.get<{ user: User | null; message: string }>(
      `${this.BACKEND_URL}user/${id}`
    );
  }

}
