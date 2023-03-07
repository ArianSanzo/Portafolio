import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Habilidad } from '../habilidad/habilidad';
import { BotonesAgregarService } from 'src/app/servicios/botones-agregar.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-agregar-habilidad',
  templateUrl: './agregar-habilidad.component.html',
  styleUrls: ['./agregar-habilidad.component.css']
})
export class AgregarHabilidadComponent {

  @Output() onAddHabilidad: EventEmitter<Habilidad> = new EventEmitter();

  habilidad:string = "" ;
  porcentaje:number = 0 ;

  showaddHabilidad: boolean = false;
  subscription2?: Subscription;

  constructor(private botonesAgregarService: BotonesAgregarService){
    this.subscription2 = this.botonesAgregarService.onToggle2().subscribe(value => 
      this.showaddHabilidad = value)
  }

  onSubmit(){
    if(this.habilidad.length === 0){
      alert("¡¡¡Agrega una habilidad!!!")
      return
    }
    const { habilidad, porcentaje} = this
    const newHabilidad = {
     habilidad, porcentaje
    }
    this.onAddHabilidad.emit(newHabilidad)
  }

}
