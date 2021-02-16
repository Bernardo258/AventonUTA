import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
password:string;
  constructor(private _aRouter: Router) { }

  ngOnInit(): void {
  }
enviar(){
  this._aRouter.navigate(['../intoAdmin'])
}
}
