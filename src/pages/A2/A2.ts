import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { NavController, NavParams } from 'ionic-angular';

import { note } from '../note/note';
@IonicPage()
@Component({
  selector: 'page-A2',
  templateUrl: 'A2.html'
})
export class A2 {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  itemTapped(event, item) {
    this.navCtrl.push(note, {
      item :  {
      	note :  [
      	],
        key:'A2'
      }
    });
  }

}