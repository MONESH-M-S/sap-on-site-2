import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Mark } from '@models/mark';

@Injectable({
  providedIn: 'root',
})
export class MarkService {
  BACKEND_URL = environment.BACKEND_URL;
  constructor(private http: HttpClient) {}

  getMarkByUserId(id: string) {
    return this.http.get<{ mark: Mark; message: string }>(
      `${this.BACKEND_URL}mark/user-id/${id}`
    );
  }
}
