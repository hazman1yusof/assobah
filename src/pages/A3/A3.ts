import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { NavController, NavParams } from 'ionic-angular';

import { note } from '../note/note';

@IonicPage()
@Component({
  selector: 'page-A3',
  templateUrl: 'A3.html'
})
export class A3 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  }
  itemTapped(event, item) {
    this.navCtrl.push(note, {
      item :  {
      	note :  [
      	],
        key:'A3'
      }
    });
  }
}
