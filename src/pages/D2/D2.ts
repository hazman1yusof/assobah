import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { note } from '../note/note';

import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-D2',
  templateUrl: 'D2.html'
})
export class D2 {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  }

   itemTapped(event, item) {
    this.navCtrl.push(note, {
      item :  {
      	note :  [
      		"Tiada Dengung bila huruf Nun Mati <h3>( نْ )</h3> atau Tanwin <h3>( ـً )</h3> <h3>( ـٍ )</h3> <h3>( ـٌ )</h3> diikuti oleh 8 huruf lain dan bila huruf Mim Mati <h3>( مْ )</h3> diikuti oleh 26 huruf lain.",
          "<h1><span class='d'>* </span></h1> - Rapatkan bibir lebih lagi (Tahqiqul Izhar) - rujuk guru"
      	],
        key:'D2'
      }
    });
  }

}
