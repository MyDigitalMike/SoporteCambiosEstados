import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  {
  path:'',
  component: SkeletonComponent,
  children:[
      {
        path:'',
        loadChildren:()=> import('./modules/inicio/inicio.module').then( (m) => m.InicioModule)
      },
      {
        path:'inicio',
        loadChildren:()=> import('./modules/inicio/inicio.module').then( (m) => m.InicioModule)
      },
      {
        path:'**',
        loadChildren:()=> import('./modules/error/error.module').then( (m) => m.ErrorModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
