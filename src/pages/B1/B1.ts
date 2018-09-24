import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { note } from '../note/note';
import { IonicPage } from 'ionic-angular';
@IonicPage()

@Component({
  selector: 'page-B1',
  templateUrl: 'B1.html'
})
export class B1 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  }
  itemTapped(event) {
    this.navCtrl.push(note, {
      item :  {
        note :  [
        ],
        key:'B1'
      }
    });
  }
}
