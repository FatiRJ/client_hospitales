import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteListaComponent } from './paciente-lista/paciente-lista.component';

const routes: Routes = [
  { path: '', redirectTo: 'pacientelista', pathMatch: 'full' }, 
  { path: 'pacientelista', component: PacienteListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }