import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Establecimiento } from './establecimiento';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.css']
})
export class EstablecimientoComponent implements OnInit {

  @Input() establecimiento! : Establecimiento
  @Output() onDeleteEstablecimiento: EventEmitter<Establecimiento> = new EventEmitter()
  ngOnInit(){}

  onDelete(establecimiento: Establecimiento){
    this.onDeleteEstablecimiento.emit(establecimiento)
  }

}
