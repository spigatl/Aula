import { Component } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular'
import { conta } from '../conta/conta'
//import { DAOagenda } from '../../app/dao/DAOagenda'

@Component({
  selector: 'agenda',
  templateUrl: 'agenda.html'
})

export class agenda {
  dao:any; 
  items: any[];
    constructor(public modalCtrl: ModalController) {
      //this.dao = new DAOagenda('');
      //this.items = this.dao.getList();
      this.insert();
      console.log(this.items)
    }

    presentProfileModal() {
      let profileModal = this.modalCtrl.create(conta);
      profileModal.onDidDismiss((data) => {
        this.items.push(data)
      })
      profileModal.present();
  }
  insert() {
    this.items = [
      {
        descricao: "Spiga"
      },
      {
        descricao: "spiga2"
      },
      {
        descricao: "spiga3"
      }
    ];
  }
  editar(data) {
    let profileModal = this.modalCtrl.create(conta, {parametro: data});
      profileModal.onDidDismiss((data) => {
        this.items.push(data)
      })
      profileModal.present();
  }
}

class Profile {

 constructor(params: NavParams) {
   console.log('UserId', params.get('userId'));
 }


}
