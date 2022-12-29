import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[] = ['Juan', 'Ana', 'Cecilia', 'Marcos', 'Whats'];
  heroeBorrado: string = '';

  removeHeroe(): void{
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
