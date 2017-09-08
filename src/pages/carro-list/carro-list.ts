import { Component, NgModule } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Carro } from '../../modelo/carro';
import { Marca } from '../../modelo/marca';
import { CarroProvider } from '../../provider/carro-provider';
import { CarroDetailPage } from '../carro-detail/carro-detail';
import { CarroCreatePage } from '../carro-create/carro-create';

@Component({
  selector: 'carro-list',
  templateUrl: 'carro-list.html'
})
export class ListaCarrosComponent {

  public listaCarros : Carro[];

  constructor(public navCtrl: NavController, public carroProvider : CarroProvider) {
    this.listaCarros = this.carroProvider.getAll();
  }

  consultarVeiculo(carro : Carro){
    this.navCtrl.push(CarroDetailPage, { carroId : carro.id });
  }  

  alterarVeiculo(carro : Carro){
    this.navCtrl.push(CarroCreatePage, { carroId : carro.id });
  }  

  excluirVeiculo(carro : Carro){
    this.carroProvider.excluir(carro);
  }  
}
