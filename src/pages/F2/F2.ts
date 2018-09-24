import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { note } from '../note/note';
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-F2',
  templateUrl: 'F2.html'
})
export class F2 {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  }
  itemTapped(event, item) {
    this.navCtrl.push(note, {
      item :  {
      	note :  [
      	],
        key:'F2'
      }
    });
  }

}
