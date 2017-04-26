import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';

@Component({
  selector: 'conta',
  templateUrl: 'conta.html',
})
export class conta {
  conta: any;
  descricao: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ViewCtrl: ViewController) {
      this.conta = this.navParams.get("parametro") || {descricao: ""};
  }

  
  fechar() {
    this.ViewCtrl.dismiss();
  }
  salvar() {
    this.ViewCtrl.dismiss(this.conta);
  }
}
