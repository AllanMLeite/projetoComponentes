import { Component, NgModule } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ListaCarrosComponent } from '../carro-list/carro-list';
import { CarroCreatePage } from '../carro-create/carro-create';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  exibirModalNovoCarro() {
    let addModal = this.modalCtrl.create(CarroCreatePage);
    addModal.present();
  }
}
