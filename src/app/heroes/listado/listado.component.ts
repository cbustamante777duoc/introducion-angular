import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  heroes:string[] = ['spiderman','hulk','thor','antman'];
  heroeBorrado:string = '';
  



  //metodo que borra un elemento de arreglo en caso que de undefinited
  //o un string vacio
  borrarHeroe(){
    this.heroeBorrado =  this.heroes.shift() || '';
    
  }
}
