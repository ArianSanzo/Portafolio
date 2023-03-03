import { Component, OnInit, Input } from '@angular/core';

import { Trabajo } from './trabajo'; 


@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})



export class TrabajoComponent implements OnInit {
  @Input() trabajo!: Trabajo
  ngOnInit(): void {
     
  }

}
