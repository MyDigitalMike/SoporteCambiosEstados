import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadoguiasComponent } from './estadoguias/estadoguias.component';

const routes: Routes = [
  {
    path:'',
    component: EstadoguiasComponent
  },
  {
    path:'estadoguias',
    component: EstadoguiasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }