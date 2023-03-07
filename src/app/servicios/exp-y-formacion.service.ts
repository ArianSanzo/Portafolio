import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';

import { Trabajo } from '../vista/portafolio/experiencia/trabajo/trabajo';
import { Habilidad } from '../vista/portafolio/habilidades/habilidad/habilidad';
import { Proyecto } from '../vista/portafolio/proyectos/proyecto/proyecto';
import { Establecimiento } from '../vista/portafolio/educacion/establecimiento/establecimiento';

const httpOptions = {
  headers: new HttpHeaders
}

@Injectable({
  providedIn: 'root'
})
export class ExpYFormacionService {
  private apitrabajourl = 'http://localhost:5000/trabajos'
  private apihabilidadurl = 'http://localhost:5000/habilidades'
  private apiproyectosurl = 'http://localhost:5000/proyectos'

  constructor( 
    private http: HttpClient
    ) { }

  getTrabajos(): Observable<Trabajo[]>  {
    return this.http.get<Trabajo[]>(this.apitrabajourl)
  }
  getHabilidades(): Observable<Habilidad[]>  {
    return this.http.get<Habilidad[]>(this.apihabilidadurl)
  }
  getProyectos(): Observable<Proyecto[]>  {
    return this.http.get<Proyecto[]>(this.apiproyectosurl)
  }
  deleteTrabajo(trabajo: Trabajo): Observable<Trabajo>{
    const url = `${this.apitrabajourl}/${trabajo.id}`;
    return this.http.delete<Trabajo>(url)
  }
  deleteHabilidad(habilidad:Habilidad): Observable<Habilidad>{
    const url = `${this.apihabilidadurl}/${habilidad.id}`;
    return this.http.delete<Habilidad>(url)
  }
  addTrabajo(trabajo:Trabajo): Observable<Trabajo>{
    return this.http.post<Trabajo>(this.apitrabajourl, trabajo, httpOptions)
  }
  addHabilidad(habilidad:Habilidad): Observable<Habilidad>{
    return this.http.post<Habilidad>(this.apihabilidadurl, habilidad, httpOptions)
  }
  
}
