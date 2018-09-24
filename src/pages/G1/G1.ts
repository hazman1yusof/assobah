import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { note } from '../note/note';
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-G1',
  templateUrl: 'G1.html'
})
export class G1 {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  }
  itemTapped(event, item) {
    this.navCtrl.push(note, {
      item :  {
      	note :  [
      	],
        key:'G1'
      }
    });
  }

}
