import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Marca } from '../modelo/marca';

@Injectable()
export class MarcaProvider {

  public marcas : Marca[];

  init() : void {
    console.log('populando lista de marcas...');
    this.marcas = [
      new Marca(1, "Fiat"),
      new Marca(2, "Kawasaki"),
    ]
  }  

  getAll() : Marca[] {
    if(this.marcas == null){
      this.init();
    }  

    return this.marcas;
  }

  consulta(id : number) : Marca {
    if(this.marcas == null){
      this.init();
    }  
    
    return this.marcas.find(x => x.id == id);
  }
}
