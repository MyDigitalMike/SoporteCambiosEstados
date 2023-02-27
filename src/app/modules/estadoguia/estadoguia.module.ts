import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoguiasComponent } from './estadoguias/estadoguias.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EstadoguiasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class EstadoguiaModule { }
