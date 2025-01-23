import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Platera } from '../classes/platera';

@Injectable({
  providedIn: 'root'
})
export class PlateraService {

  private url = 'http://localhost:8000/api/platerak';
  constructor(private http: HttpClient) { }

  getPlaterak(): Observable<Platera[]> {
    return this.http.get<Platera[]>(this.url);
  }

 /*  getKluba(id: number): Observable<Kluba> {
    return this.http.get<Kluba>(this.url + '/' + id);
  } */
}