import { Component } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular'
import { conta } from '../conta/conta'

@Component({
  selector: 'agenda',
  templateUrl: 'agenda.html'
})

export class agenda {
  items: any[];
    constructor(public modalCtrl: ModalController) {
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
}

class Profile {

 constructor(params: NavParams) {
   console.log('UserId', params.get('userId'));
 }


}
