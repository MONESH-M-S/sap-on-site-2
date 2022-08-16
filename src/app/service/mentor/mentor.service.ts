import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class MentorService {
  BACKEND_URL = environment.BACKEND_URL;
  mentors: any[] = [];
  availableMentor = [];

  constructor(private http: HttpClient) {}

  getMentors() {
    return this.http.get<any[]>(`${this.BACKEND_URL}available-mentors/`);
  }

  addAdmin(name: string, id: string, dept: string) {
    return this.http.put<{ message: string }>(
      `${this.BACKEND_URL}available-mentors/${dept}`,
      {
        name,
        id,
      }
    );
  }

  checkOldPassword(password: string, id: string) {
    return this.http.post<{ confirmation: boolean; message: string }>(
      `${this.BACKEND_URL}user/check-password/${id}`,
      { password }
    );
  }

  updatePassword(password: string, id: string) {
    return this.http.put<{ updated: boolean; message: string }>(
      `${this.BACKEND_URL}user/update-password/${id}`,
      { password }
    );
  }
}
