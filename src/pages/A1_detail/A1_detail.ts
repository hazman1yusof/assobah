import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IonicPage } from 'ionic-angular';

import { note } from '../note/note';
import { NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-A1_detail',
  templateUrl: 'A1_detail.html'
})
export class A1_detail {
  selectedItem: any;
  obj: any;
  Waqoaf: any;
  Fathah: any;
  Kasroah: any;
  Dhoammah: any;
  kaedah_sebutan: any;
  no:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.obj = this.selectedItem.obj;
  	this.Waqoaf = this.sanitizer.bypassSecurityTrustHtml(this.obj['Sebutan/Bacaan']['Waqoaf']);
  	this.Fathah = this.sanitizer.bypassSecurityTrustHtml(this.obj['Sebutan/Bacaan']['Baris Atas Fathah']);
  	this.Kasroah = this.sanitizer.bypassSecurityTrustHtml(this.obj['Sebutan/Bacaan']['Baris Bawah Kasroah']);
  	this.Dhoammah = this.sanitizer.bypassSecurityTrustHtml(this.obj['Sebutan/Bacaan']['Baris Depan Dhoammah']);
    this.kaedah_sebutan = this.sanitizer.bypassSecurityTrustHtml(this.obj['Kaedah Menyebut']);
    this.no = this.selectedItem.no
  }

  itemTapped(event) {
    this.navCtrl.push(note, {
      item :  {
        note :  [
        ],
        key:'A1_detail'+this.no
      }
    });
  }
}
