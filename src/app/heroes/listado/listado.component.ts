import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  heroes:string[] = ['spiderman','hulk','thor','antman'];
  heroeBorrado:string = '';
  mostrar:boolean = true;



  //metodo que borra un elemento de arreglo en caso que de undefinited
  //o un string vacio
  borrarHeroe(){
    this.heroeBorrado =  this.heroes.shift() || '';
    if (this.heroes.length ==0) {
      this.mostrar = false;
    }
  }
}
