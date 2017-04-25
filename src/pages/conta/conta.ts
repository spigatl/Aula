import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'conta',
  templateUrl: 'conta.html',
})
export class conta {
  conta: any;
  descricao: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ViewController: ViewController) {
      this.conta = {descricao: ""};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad conta');
  }
  fechar() {
    this.ViewController.dismiss();
  }
  salvar() {
    this.ViewController.dismiss(this.conta);
  }
}
