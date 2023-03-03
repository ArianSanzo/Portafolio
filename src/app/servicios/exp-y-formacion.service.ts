import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { Trabajo } from '../vista/portafolio/experiencia/trabajo/trabajo';

@Injectable({
  providedIn: 'root'
})
export class ExpYFormacionService {
  private apitrabajourl = 'http://localhost:5000/trabajos'

  constructor( 
    private http: HttpClient
    ) { }

  getTrabajos(): Observable<Trabajo[]>  {
    return this.http.get<Trabajo[]>(this.apitrabajourl)
  }
}
