import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotonesAgregarService {
  private showaddTrabajo: boolean = false
  private showaddHabilidad: boolean = false
  private subject = new Subject<any>();
  private subject2 = new Subject<any>();

  constructor() { }
  toggleAddTrabajo(): void {
    this.showaddTrabajo = !this.showaddTrabajo
    this.subject.next(this.showaddTrabajo);
  }

  toggleAddHabilidad(): void {
    this.showaddHabilidad = !this.showaddHabilidad
    this.subject2.next(this.showaddHabilidad);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
  onToggle2(): Observable<any>{
    return this.subject2.asObservable();
  }
  
}
