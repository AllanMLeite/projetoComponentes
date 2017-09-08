import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Carro } from '../../modelo/carro';
import { CarroProvider } from '../../provider/carro-provider';

@IonicPage({
  segment: 'carro/:carroId'
})
@Component({
  selector: 'carro-detail',
  templateUrl: 'carro-detail.html'
})
export class CarroDetailPage {

  carro : Carro;

  constructor(public carroProvider: CarroProvider, public navParams: NavParams ) {
   
    this.carro = this.carroProvider.consulta(this.navParams.data.carroId);
    }
}
