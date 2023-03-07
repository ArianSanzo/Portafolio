import { Component } from '@angular/core';
import { ExpYFormacionService } from 'src/app/servicios/exp-y-formacion.service';

import { Proyecto } from './proyecto/proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  proyectos: Proyecto[] = [];

constructor( 
  private expYFormacionService: ExpYFormacionService
  ){}

ngOnInit(): void {
  this.expYFormacionService.getProyectos().subscribe((proyectos)=> (this.proyectos = proyectos));
}

}
