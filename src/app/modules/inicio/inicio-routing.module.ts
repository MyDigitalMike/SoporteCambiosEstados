import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { EstadoguiasComponent } from '../estadoguia/estadoguias/estadoguias.component';
const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'estadoguias',
    component: EstadoguiasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }