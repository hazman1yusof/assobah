import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-add_note',
  templateUrl: 'add_note.html'
})
export class add_note {
  note: string;
  key: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.key = navParams.get('key');
  }

  ionViewDidLoad() {
    this.ambilNota();
  }

  simpanNota(){
  	this.storage.set(this.key,this.note);
    this.navCtrl.pop();
  }

  ambilNota(){
  	var self = this;
  	this.storage.get(this.key).then(function(value) {
  	  self.note = value;
  	});
  }
}
