import { Component, Input, OnInit } from '@angular/core';

import { Proyecto } from './proyecto';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
@Input() proyecto!: Proyecto


}
