import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteListaComponent } from './paciente-lista/paciente-lista.component';
import { MedicosListaComponent } from './medicos-lista/medicos-lista.component';
import { DepartamentosListaComponent } from './departamentos-lista/departamentos-lista.component';
import { HospitalesListaComponent } from './hospitales-lista/hospitales-lista.component';
import { ConsultasListaComponent } from './consultas-lista/consultas-lista.component';
import { DefaultModalComponent } from './DefaultComponents/default-modal/default-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PacienteListaComponent,
    MedicosListaComponent,
    DepartamentosListaComponent,
    HospitalesListaComponent,
    ConsultasListaComponent,
    DefaultModalComponent,
    PacienteListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
