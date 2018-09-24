import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { note } from '../note/note';

import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-E2',
  templateUrl: 'E2.html'
})
export class E2 {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  }

  itemTapped(event, item) {
    this.navCtrl.push(note, {
      item :  {
      	note :  [
      		"Ianya berlaku pada 3 Huruf Mad, iaitu ا و ي . Terpanjang 6 haroakat manakala terpendek 2haroakat saja.",
          "<h1><span class='d'>* </span></h1> - Berlaku ketika sambung bacaan (wassoal) sahaja."
      	],
        key:'E2'
      }
    });
  }

}
