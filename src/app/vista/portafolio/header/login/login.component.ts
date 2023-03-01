import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter();

  onClick(){
    this.btnClick.emit();
  };
}
