import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Activity } from '@models/activity';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  BACKEND_URL = environment.BACKEND_URL;
  activities: Subject<Activity[]> = new Subject<Activity[]>();

  constructor(private http: HttpClient) {}

  getUserActivityByUserId(id: string) {
    this.http
      .get<{ activities: Activity[]; message: string }>(
        `${this.BACKEND_URL}activity/user-id/${id}`
      )
      .subscribe((res) => {
        if (res.activities.length > 0) {
          this.activities.next(res.activities);
        } else {
          this.activities.next([]);
        }
      });
  }

  getUserUpdatedActivity() {
    return this.activities.asObservable();
  }

  uploadNewActivity(activity: FormData) {
    return this.http.post<{ activity: any; message: string }>(
      `${this.BACKEND_URL}activity/`,
      activity
    );
  }

  deleteActivity(id: string) {
    return this.http.delete<{ success: boolean; message: string }>(
      `${this.BACKEND_URL}activity/${id}`
    );
  }
}
