import { Component, OnInit, Input } from '@angular/core';

import { Establecimiento } from './establecimiento';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.css']
})
export class EstablecimientoComponent implements OnInit {

  @Input() establecimiento! : Establecimiento

  ngOnInit() {}

}
