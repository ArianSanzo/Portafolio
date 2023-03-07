import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Trabajo } from './trabajo'; 


@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})



export class TrabajoComponent implements OnInit {
  @Input() trabajo!: Trabajo
  @Output() onDeleteTrabajo: EventEmitter<Trabajo> = new EventEmitter();
  ngOnInit(): void {
     
  }
  onDelete(trabajo: Trabajo) {
    this.onDeleteTrabajo.emit(trabajo);
  }

}
