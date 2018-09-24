import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { note } from '../note/note';
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-A4',
  templateUrl: 'A4.html'
})
export class A4 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  }
  itemTapped(event, item) {
    this.navCtrl.push(note, {
      item :  {
      	note :  [
      	],
        key:'A4'
      }
    });
  }
}
