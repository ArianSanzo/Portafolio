import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';

import { Establecimiento } from './establecimiento/establecimiento';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  establecimientos: Establecimiento[] = [];

  constructor(
    private educacionService: EducacionService
  ){};

  ngOnInit(): void {
    this.educacionService.getFormacion().subscribe((establecimientos)=> (this.establecimientos = establecimientos));
  };

  deleteEstablecimiento(establecimiento: Establecimiento){
    this.educacionService.deleteEstablecimiento(establecimiento).subscribe(()=>
    this.establecimientos = this.establecimientos.filter( t => t.id !== establecimiento.id))
  }

}
