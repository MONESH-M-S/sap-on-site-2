import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { environment } from '@env/environment';
import { User } from '@models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllAdminResolver
  implements Resolve<{ users: User[] | null; message: string }>
{
  BACKEND_URL = environment.BACKEND_URL;
  constructor(private http: HttpClient) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<{ users: User[] | null; message: string }> {
    return this.http.get<{ users: User[] | null; message: string }>(
      `${this.BACKEND_URL}user/mentors`
    );
  }
}
