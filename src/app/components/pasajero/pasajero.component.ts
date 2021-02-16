import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.css']
})
export class PasajeroComponent implements OnInit {
  password:string;
  constructor(private _aRouter: Router) { }

  ngOnInit(): void {
  }
enviar(){
  this._aRouter.navigate(['../intoPasajero'])
}
cambio(){
  this._aRouter.navigate(['../admin'])
}
}
