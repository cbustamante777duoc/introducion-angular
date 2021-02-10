import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

    private _personajes: Personaje[] = [
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
        {
          nombre:'Son Goten',
          poder:800
        },
        {
          nombre:'Trunks',
          poder:810
        },
        {
          nombre:'Gotenks',
          poder:1610
        },



      ]
    
      get personajes(): Personaje[]{
        return [...this._personajes];
      }

    constructor(){}

    agregarPersonaje(personaje:Personaje){
      this._personajes.push(personaje);
    }

}