import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dar-de-alta',
  templateUrl: './dar-de-alta.component.html',
  styleUrls: ['./dar-de-alta.component.css']
})
export class DarDeAltaComponent implements OnInit {

  constructor(private _aRouter: Router) { }

  ngOnInit(): void {
  }
Regreso(){
  this._aRouter.navigate(['../intoChofer'])
}
}
