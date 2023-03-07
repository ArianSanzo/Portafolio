import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { Establecimiento } from '../vista/portafolio/educacion/establecimiento/establecimiento';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private apieducacionurl = 'http://localhost:5000/establecimientos'

  constructor(
    private http: HttpClient
  ) { }
  getFormacion(): Observable<Establecimiento[]>  {
    return this.http.get<Establecimiento[]>(this.apieducacionurl)
  }
  deleteEstablecimiento(establecimiento: Establecimiento): Observable<Establecimiento>{
    const url = `${this.apieducacionurl}/${establecimiento.id}`;
    return this.http.delete<Establecimiento>(url)
  }
}
