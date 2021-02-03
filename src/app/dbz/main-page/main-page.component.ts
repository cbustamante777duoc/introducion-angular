import { Component} from '@angular/core';

interface Personaje{
  nombre:string;
  poder:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
  
})
export class MainPageComponent {

  nuevo:Personaje = {
    nombre:'Trucks',
    poder:1100
  }

  Agregar(){
    console.log(this.nuevo)
  }

  
}
