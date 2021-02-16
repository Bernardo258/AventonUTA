import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConductorComponent } from './components/conductor/conductor.component';
import { PasajeroComponent } from './components/pasajero/pasajero.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RPasajeroComponent } from './components/Registros/rpasajero/rpasajero.component';
import { RChoferComponent } from './components/Registros/rchofer/rchofer.component';
import { IntoAdminComponent } from './components/intoApp/into-admin/into-admin.component';
import { IntoPasajeroComponent } from './components/intoApp/into-pasajero/into-pasajero.component';
import { IntoChoferComponent } from './components/intoApp/into-chofer/into-chofer.component';
import { DarDeAltaComponent } from './components/intoApp/dar-de-alta/dar-de-alta.component';

@NgModule({
  declarations: [
    AppComponent,
    ConductorComponent,
    PasajeroComponent,
    AdministradorComponent,
    NavbarComponent,
    RPasajeroComponent,
    RChoferComponent,
    IntoAdminComponent,
    IntoPasajeroComponent,
    IntoChoferComponent,
    DarDeAltaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'pasajero', component: PasajeroComponent},
      {path: 'conductor', component: ConductorComponent},
      {path: 'about', component: AboutComponent},
      {path: 'admin', component: AdministradorComponent},
      {path: 'rchofer', component: RChoferComponent},
      {path: 'rpasajero', component: RPasajeroComponent},
      {path: 'intoAdmin', component: IntoAdminComponent},
      {path: 'intoPasajero', component: IntoPasajeroComponent},
      {path: 'intoChofer', component: IntoChoferComponent},
      {path: 'dardealta', component: DarDeAltaComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
