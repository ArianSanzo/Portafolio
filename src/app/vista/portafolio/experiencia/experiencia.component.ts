import { Component, OnInit } from '@angular/core';
import { ExpYFormacionService } from 'src/app/servicios/exp-y-formacion.service';

import { Trabajo } from './trabajo/trabajo';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

  trabajos: Trabajo[] = [];

  constructor(
    private expYFormacionService: ExpYFormacionService
  ){}; 

  ngOnInit(): void {
    this.expYFormacionService.getTrabajos().subscribe((trabajos)=> (this.trabajos = trabajos));
  };
}
