import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams } from 'ionic-angular';

import { add_note } from '../add_note/add_note';

@Component({
  selector: 'page-note',
  templateUrl: 'note.html'
})
export class note {
  item: any;
  note: any;
  key: any;
  note_tam: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  	var obj = navParams.get('item');
    this.item = obj['note'];
    this.key = obj['key'];
  }

  ionViewDidLoad() {
    this.ambilNota();
  }

  ionViewWillEnter() {
    this.ambilNota();
  }

  add_note_f(event) {
    this.navCtrl.push(add_note, {
      note :  this.note,
      key: this.key
    });
  }

  ambilNota(){
  	var self = this;
  	this.storage.get(this.key).then(function(value) {
	  self.note_tam = value;
	});
  }

}
