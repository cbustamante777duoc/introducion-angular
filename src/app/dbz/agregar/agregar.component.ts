import { Component, EventEmitter, Input, Output} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
   

  //recibe un objeto desde el main-page.ts como un objeto
  @Input() nuevo:Personaje = {
    nombre:'',
    poder:1100
  }

  constructor(private DbzService: DbzService){

  }
  // @Output() onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter();

  Agregar(){

    //pregunta si no tiene nada el nuevo.nombre se sale del metodo
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.DbzService.agregarPersonaje(this.nuevo);

    //this.nuevo es objeto que se envia hacia el padre(main-page-componet.html)
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = {
      nombre:'',
      poder:0
    }
  }

}
