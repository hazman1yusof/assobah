import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { note } from '../note/note';

import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-C2',
  templateUrl: 'C2.html'
})
export class C2 {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  }

  itemTapped(event, item) {
    this.navCtrl.push(note, {
      item :  {
      	note :  [
      		"Berlaku Dengung bila huruf Nun Mati <h3>( ن )</h3> atau Tanwin <h3>( ـً )</h3> <h3>( ـٍ )</h3> <h3>( ـٌ )</h3> diikuti oleh 20 huruf lain dan bila huruf Mim Mati <h3>( م )</h3> diikuti 2 huruf lain.",
      		"Bagi memastikan panjang sebutan sempurna dua (2) haroakat tercapai, sentiasa amalkan sebutan dengan tiga (3) atau empat (4) haroakat, ini tidak menyalahi",
      		"<h1><span class='d'>^ </span></h1> tanda ini menandakan sengau pada dengung"
      	],
        key:'C2'
      }
    });
  }

}
