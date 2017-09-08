import { Injectable } from '@angular/core';
import { Carro } from '../modelo/carro';
import { MarcaProvider } from './marca-provider';

@Injectable()
export class CarroProvider {

  constructor(public marcaProvider : MarcaProvider){}

  public carros : Carro[];

  init() : void {
    console.log('populando lista de carros...');
    this.carros = new Array<Carro>();
    
    var carro1 = new Carro();
    carro1.tipo = "automovel";
    carro1.ano = 2015;
    carro1.marca = this.marcaProvider.consulta(1);
    this.salva(carro1);

    var carro2 = new Carro();
    carro2.tipo = "motocicleta";
    carro2.ano = 2008;
    carro2.marca = this.marcaProvider.consulta(2);
    this.salva(carro2);
  }  

  public getAll() : Carro[]{
      if(this.carros == null){
          this.init();
      }

    return this.carros;
  }

  public consulta(id : number) : Carro {
    if(this.carros == null){
      this.init();
    }  
    
    return this.carros.find(x => x.id == id);
  }
  
  public salva(carro : Carro) : Carro {
    if(carro.id == null){
      return this.adicionar(carro);
    } else {
      return this.alterar(carro);
    }
  }

  public excluir(carro : Carro) : void {
    var index = this.carros.findIndex(x => x.id == carro.id);    
    this.carros.splice(index, 1);
  }
  
  private alterar(carro : Carro) : Carro {    
    var index = this.carros.findIndex(x => x.id == carro.id);    
    this.carros.splice(index, 1);
    this.carros.splice(index, 0, carro);
    return carro;
  }
  
  private adicionar(carro : Carro) : Carro {    
    carro.id = this.obterProximoId();    
    this.carros.push(carro);
    return carro;
  }
  
  private obterProximoId() : number {
    return this.carros != null && this.carros.length > 0 ? Math.max.apply(Math,this.carros.map(function(item){return item.id;})) + 1 : 1;
  }
}