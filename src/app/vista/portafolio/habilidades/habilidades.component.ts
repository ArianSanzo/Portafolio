import { Component, OnInit } from '@angular/core';
import { ExpYFormacionService } from 'src/app/servicios/exp-y-formacion.service';
import { BotonesAgregarService } from 'src/app/servicios/botones-agregar.service';
import { Subscription} from 'rxjs';

import { Habilidad } from './habilidad/habilidad';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  showaddHabilidad = false;
  subscription2!: Subscription;
  habilidades: Habilidad[] = []; 

  constructor(
    private expYFormacionService: ExpYFormacionService,
    private botonesAgregarService: BotonesAgregarService
  ){
    this.subscription2 = this.botonesAgregarService.onToggle2().subscribe(value => 
      this.showaddHabilidad = value)
  }; 

  ngOnInit(): void {
    this.expYFormacionService.getHabilidades().subscribe((habilidades)=> (this.habilidades = habilidades));
  };
  deleteHabilidad(habilidad: Habilidad) {
    this.expYFormacionService.deleteHabilidad(habilidad).subscribe(()=> 
    (this.habilidades = this.habilidades.filter(t => t.id !== habilidad.id)))
  }
  toggleAddHabilidad(){
    this.botonesAgregarService.toggleAddHabilidad();
  }
  addHabilidad(habilidad: Habilidad) {
    this.expYFormacionService.addHabilidad(habilidad).subscribe((habilidad)=> 
    this.habilidades.push(habilidad))
  }

}
