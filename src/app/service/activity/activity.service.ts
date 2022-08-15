import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  BACKEND_URL = environment.BACKEND_URL;
  constructor(private http: HttpClient) {}

  uploadNewActivity(activity: FormData) {
    return this.http.post<{ activity: any; message: string }>(
      `${this.BACKEND_URL}activity/`,
      activity
    );
  }
}
