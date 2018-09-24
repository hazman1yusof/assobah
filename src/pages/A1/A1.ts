import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IonicPage } from 'ionic-angular';

import { NavController, NavParams } from 'ionic-angular';
import { AllData } from '../../providers/all-data';

@IonicPage()
@Component({
  selector: 'page-A1',
  templateUrl: 'A1.html'
})
export class A1 {
  icons: string[];
  items: Array<{huruf: string, sebutan: string, no: string, istilak: Boolean, xdemalay: Boolean, obj:any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public allData: AllData, private sanitizer: DomSanitizer) {

    this.items = [];
  }

  ionViewDidLoad() {
    this.allData.getJSONDataAsync("./assets/data/data_A.json").then(data => {
      this.SetQueryOptionsData(data);
    });
  }

  SetQueryOptionsData(data : any) {
  	var self = this;
  	this.items = data.A1.map(function(obj,i){
 	    let rObj = {};
      rObj['huruf'] = obj["Huruf Hijaiyah"];
      rObj['sebutan'] = self.sanitizer.bypassSecurityTrustHtml(obj["Sebutan/Bacaan"]["Waqoaf"]);
      rObj['istilak'] = obj["istilak"];
      rObj['xdemalay'] = obj["xdemalay"];
      rObj['no'] = i+1;
      rObj['obj'] = obj;
      return rObj;
  	});
  }

  itemTapped(event, item) {
    this.navCtrl.push('A1_detail', {
      item: item
    });
  }
}
