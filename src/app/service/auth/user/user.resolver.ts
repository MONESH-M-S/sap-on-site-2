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
export class UserResolver
  implements Resolve<{ user: User | null; message: string }>
{
  BACKEND_URL = environment.BACKEND_URL;
  constructor(private http: HttpClient) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<{ user: User | null; message: string }> {
    return this.http.get<{ user: User | null; message: string }>(
      `${this.BACKEND_URL}user/${route.params.id}`
    );
  }
}
