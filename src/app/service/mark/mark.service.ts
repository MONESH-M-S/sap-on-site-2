import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Mark } from '@models/mark';
import { Subject, tap } from 'rxjs';

const ACTIVITIES = {
  mark: 0,
  paper: 0,
  project: 0,
  club: 0,
  techno_managerial: 0,
  sports: 0,
  vac: 0,
  project_to_paper: 0,
  gate_govt_exam: 0,
  placement_intern: 0,
  entrepreneurship: 0,
  voluntary: 5,
  nptel: 0,
  nss_ncc: 0,
};

@Injectable({
  providedIn: 'root',
})
export class MarkService {
  BACKEND_URL = environment.BACKEND_URL;
  studentMark: Subject<{ mark: Mark }> = new Subject<{ mark: Mark }>();
  constructor(private http: HttpClient) {}

  getMarkByUserId(id: string) {
    this.http
      .get<{ mark: Mark; message: string }>(
        `${this.BACKEND_URL}mark/user-id/${id}`
      )
      .subscribe((res) => {
        if (res.mark != null) {
          this.studentMark.next({ mark: res.mark });
        }
      });
  }

  getUpdatedMark() {
    return this.studentMark.asObservable();
  }

  updateMark(id: string, mark: number, activity: string) {
    ACTIVITIES[activity] = mark;
    ACTIVITIES['mark'] = mark;

    console.log(ACTIVITIES);

    return this.http
      .put<{ success: boolean; message: string }>(
        `${this.BACKEND_URL}mark/user-id/${id}`,
        ACTIVITIES
      )
      .pipe(
        tap(() => {
          (ACTIVITIES[activity] = 0), (ACTIVITIES[mark] = 0);
        })
      );
  }
}
