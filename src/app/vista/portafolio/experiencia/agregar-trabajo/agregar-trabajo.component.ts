import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Trabajo } from '../trabajo/trabajo';
import { BotonesAgregarService } from 'src/app/servicios/botones-agregar.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-agregar-trabajo',
  templateUrl: './agregar-trabajo.component.html',
  styleUrls: ['./agregar-trabajo.component.css']
})
export class AgregarTrabajoComponent{

  @Output() onAddTrabajo: EventEmitter<Trabajo> = new EventEmitter();
  lugar: string = "";
  puesto: string = "";
  periodo: string = "";
  logo!: string
  descripcion: string = "";

  showaddTrabajo: boolean = false;
  subscription?: Subscription;

  constructor(private botonesAgregarService: BotonesAgregarService){
    this.subscription = this.botonesAgregarService.onToggle().subscribe(value => 
      this.showaddTrabajo = value)
  }

  onSubmit(){
    if(this.lugar.length === 0){
      alert("¡¡¡Agrega un trabajo!!!")
      return
    }
    const { lugar, puesto, periodo, logo, descripcion} = this
    const newTrabajo = {
     lugar, puesto, periodo, logo, descripcion
    }
    this.onAddTrabajo.emit(newTrabajo)
  }
}
