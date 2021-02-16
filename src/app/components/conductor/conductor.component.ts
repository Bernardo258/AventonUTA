import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css']
})
export class ConductorComponent implements OnInit {
password:string;
  constructor(private _aRouter: Router) { }

  ngOnInit(): void {
  }
  enviar(){
    this._aRouter.navigate(['../intoChofer'])
  }
  cambio(){
    this._aRouter.navigate(['../admin'])
  }
}
