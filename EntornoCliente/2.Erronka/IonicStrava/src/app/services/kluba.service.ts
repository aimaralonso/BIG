import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Kluba } from '../classes/kluba';

@Injectable({
  providedIn: 'root' // This ensures the service is provided at the root level and available throughout the app
})
export class KlubaService {
  private url = 'http://localhost:8000/api/klubak';

  constructor(private http: HttpClient) {}

  getKlubak(): Observable<Kluba[]> {
    return this.http.get<Kluba[]>(this.url);
  }
}
