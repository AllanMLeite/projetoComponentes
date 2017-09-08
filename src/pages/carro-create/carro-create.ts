import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController, ViewController, IonicPage, NavParams } from 'ionic-angular';

import { Carro } from '../../modelo/carro';
import { Marca } from '../../modelo/marca';

import { MarcaProvider } from '../../provider/marca-provider';
import { CarroProvider } from '../../provider/carro-provider';

@IonicPage({
  segment: 'carro/:carroId'
})
@Component({
  selector: 'carro-create',
  templateUrl: 'carro-create.html'
})
export class CarroCreatePage {

  form: FormGroup;

  //marca : Marca;

  constructor(public navCtrl: NavController, 
              public viewCtrl: ViewController, 
              public formBuilder: FormBuilder, 
              public marcaProvider : MarcaProvider, 
              public carroProvider : CarroProvider,
              public navParams: NavParams) {    

    if(this.navParams.data.carroId != null){
      var carroParaAlteracao = this.carroProvider.consulta(this.navParams.data.carroId);
      if(carroParaAlteracao != null){
        this.form = formBuilder.group({
          tipo: carroParaAlteracao.tipo,
          marca: carroParaAlteracao.marca,
          id: carroParaAlteracao.id
        });
      }
    } else {
      this.form = formBuilder.group({
        tipo: [''],
        marca: Marca
      });
    }      
  }
  
  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }
  
  getMarcas() {
    return this.marcaProvider.getAll();
  }
  
  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    debugger;
    if (!this.form.valid) { return; }    
    
    if (this.form.get('id') == null){
      var carro = new Carro();
      carro.marca = this.form.get('marca').value;
      carro.tipo = this.form.get('tipo').value;
      carro.ano = 1994;
      this.carroProvider.salva(carro);
    } else {
      //TODO: alteracao
    }

    this.viewCtrl.dismiss(this.form.value);
  }
}
