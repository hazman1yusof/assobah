import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { note } from '../note/note';
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-H1',
  templateUrl: 'H1.html'
})
export class H1 {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  }
  itemTapped(event, item) {
    this.navCtrl.push(note, {
      item :  {
      	note :  [
      	],
        key:'H1'
      }
    });
  }

}
