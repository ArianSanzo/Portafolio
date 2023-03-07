import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Habilidad } from './habilidad';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent { 
  @Input() habilidad!: Habilidad
  @Output() onDeleteHabilidad: EventEmitter<Habilidad> = new EventEmitter
  constructor(){}

  ngOnInit(): void { 
  }
  onDelete(habilidad: Habilidad){
    this.onDeleteHabilidad.emit(habilidad);
  }

}
