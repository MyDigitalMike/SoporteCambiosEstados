import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-estadoguias',
  templateUrl: './estadoguias.component.html',
  styleUrls: ['./estadoguias.component.css']
})
export class EstadoguiasComponent {
  name = new FormControl('');
}
