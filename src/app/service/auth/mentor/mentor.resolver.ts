import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { environment } from '@env/environment';
import { Mentor } from '@models/mentor';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MentorResolver
  implements Resolve<{ mentor: Mentor | null; message: string }>
{
  BACKEND_URL = environment.BACKEND_URL;
  constructor(private http: HttpClient) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<{ mentor: Mentor | null; message: string }> {
    return this.http.get<{ mentor: Mentor | null; message: string }>(
      `${this.BACKEND_URL}mentor/${route.params.id}`
    );
  }
}
