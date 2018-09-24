import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { note } from '../note/note';
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-F4',
  templateUrl: 'F4.html'
})
export class F4 {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  }
  itemTapped(event, item) {
    this.navCtrl.push(note, {
      item :  {
      	note :  [
      	],
        key:'F4'
      }
    });
  }

}
