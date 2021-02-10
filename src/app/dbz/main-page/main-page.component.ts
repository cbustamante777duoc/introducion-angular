import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
  
})
export class MainPageComponent {

  

  //objeto que espera ser recibido en el agregar.component.ts
  nuevo:Personaje={
    nombre:'Bulma',
    poder:10
  }

  // get personajes():Personaje[]{
  //   return this.dbzService.personajes;
  // }

  // AgregarNuevoPersonaje(argumento:Personaje){
  //   this.personajes.push(argumento);
  // }

  constructor(){}



  
}
