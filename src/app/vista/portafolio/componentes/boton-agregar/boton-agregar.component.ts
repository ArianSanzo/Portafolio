import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-agregar',
  templateUrl: './boton-agregar.component.html',
  styleUrls: ['./boton-agregar.component.css']
})
export class BotonAgregarComponent {
  @Output() btnClick = new EventEmitter();
  @Input() color: string = "";
  @Input() text:string = "";
  constructor(){}

  ngOnInit() : void {
  }
  onClick(){
    this.btnClick.emit();
  }
}
