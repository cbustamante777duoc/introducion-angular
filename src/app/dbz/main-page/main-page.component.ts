import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
  
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre:'Goku ',
      poder:1500
    },
    {
      nombre:'Broly',
      poder:1500
    },
    {
      nombre:'Vegeta',
      poder:1200
    },
    {
      nombre:'Maestro roshi',
      poder:777
    },
  ]

  nuevo:Personaje = {
    nombre:'',
    poder:1100
  }

  Agregar(){

    //pregunta si no tiene nada el nuevo.nombre se sale del metodo
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.personajes.push(this.nuevo);
    console.log(this.nuevo)

    this.nuevo = {
      nombre:'',
      poder:0
    }

  }

  
}
