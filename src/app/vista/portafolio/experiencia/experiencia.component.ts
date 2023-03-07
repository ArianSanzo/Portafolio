import { Component, OnInit } from '@angular/core';
import { ExpYFormacionService } from 'src/app/servicios/exp-y-formacion.service';
import { BotonesAgregarService } from 'src/app/servicios/botones-agregar.service';
import { Subscription} from 'rxjs';

import { Trabajo } from './trabajo/trabajo';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  showaddTrabajo = false;
  trabajos: Trabajo[] = [];
  subscription!: Subscription;
  constructor(
    private expYFormacionService: ExpYFormacionService,
    private botonesAgregarService: BotonesAgregarService
  ){
    this.subscription = this.botonesAgregarService.onToggle().subscribe(value => 
      this.showaddTrabajo = value)
  }; 

  ngOnInit(): void {
    this.expYFormacionService.getTrabajos().subscribe((trabajos)=> 
    (this.trabajos = trabajos));
  };
  deleteTrabajo(trabajo: Trabajo) {
    this.expYFormacionService.deleteTrabajo(trabajo).subscribe(()=> 
    (this.trabajos = this.trabajos.filter(t => t.id !== trabajo.id)));
  }
  addTrabajo(trabajo: Trabajo) {
    this.expYFormacionService.addTrabajo(trabajo).subscribe((trabajo)=> 
    this.trabajos.push(trabajo))
  }
  toggleAddTrabajo(){
    this.botonesAgregarService.toggleAddTrabajo();
  }
}
