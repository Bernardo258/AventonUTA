import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-into-admin',
  templateUrl: './into-admin.component.html',
  styleUrls: ['./into-admin.component.css']
})
export class IntoAdminComponent implements OnInit {

  constructor(private _aRouter: Router) { }

  ngOnInit(): void {
  }
  registerC(){
    this._aRouter.navigate(['../rchofer'])
  }
  registerP(){
    this._aRouter.navigate(['../rpasajero'])
  }
}
