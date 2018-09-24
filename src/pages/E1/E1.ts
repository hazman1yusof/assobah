import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { note } from '../note/note';

import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-E1',
  templateUrl: 'E1.html'
})
export class E1 {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  }

  itemTapped(event, item) {
    this.navCtrl.push(note, {
      item :  {
      	note :  [
      		"Ianya berlaku pada 3 Huruf Mad, iaitu ا و ي . Terpanjang 6 haroakat manakala terpendek 2haroakat saja."
      	],
        key:'E1'
      }
    });
  }

}  
