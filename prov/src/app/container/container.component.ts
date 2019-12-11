import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  cantiere: string[];
  constructor() {
    this.cantiere=['muletto','martello','elevatori','martelli pneumatici','seghetti','gru','autogru','chiodi','elmetto','camion '];
   }

  ngOnInit() {
  }

}
