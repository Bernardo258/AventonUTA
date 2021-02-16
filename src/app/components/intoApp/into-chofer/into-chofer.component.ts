import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-into-chofer',
  templateUrl: './into-chofer.component.html',
  styleUrls: ['./into-chofer.component.css']
})
export class IntoChoferComponent implements OnInit {

  constructor(private _aRouter: Router) { }

  ngOnInit(): void {
  }
  Alta(){
    this._aRouter.navigate(['../dardealta'])
  }
}
