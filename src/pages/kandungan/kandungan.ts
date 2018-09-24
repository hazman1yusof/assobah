import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { AllData } from '../../providers/all-data';
import { cloneDeep } from 'lodash'

@Component({
  selector: 'page-kandungan',
  templateUrl: 'kandungan.html'
})
export class kandungan {

  icons: string[];
  pages_sea: Array<{main: string, child:any}>;
  pages: Array<{main: string, child:any}>;
  pages_: Array<{main: string, child:any}>;
  myInput: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public allData: AllData) {

  }

  ionViewDidLoad() {
    this.allData.getKandungan().then(data => {
      this.SetQueryOptionsData(data);
    });
  }

  onInput(event: any){
    var query = this.myInput.toLowerCase();

    if(query != ''){

      var pages_sea = cloneDeep(this.pages);
      var insert = function (string_ ,index, insert_s) {
        if (index > 0)
          return string_.substring(0, index) + insert_s + string_.substring(index, string_.length);
        else
          return insert_s + string_;
      };

      pages_sea = pages_sea.filter(function(e){
        e.child = e.child.filter(function(e){
          if(e.c_in != undefined){
            e.c_in = e.c_in.filter(function(e){
              let find3 = e.toLowerCase().indexOf(query)
              if(find3!==-1){
                return true;
              } return false;
            });
            e.c_in = e.c_in.map(function(e){
              let find3 = e.toLowerCase().indexOf(query)
              e = insert(e,find3,'<span class="biru">');
              e = insert(e,find3+19+query.length,'</span>');
              return e;
            });
          }
          let find2 = e.title.toLowerCase().indexOf(query)
          if(find2!=-1){
            e.title = insert(e.title,find2,'<span class="biru">');
            e.title = insert(e.title,find2+19+query.length,'</span>');
            return true;
          }
          if(e.c_in != undefined && e.c_in.length)return true;return false;
        });
        if(e.child.length)return true;return false;
      });

      this.pages_sea = pages_sea;

    }else{

      this.pages_sea = this.pages_;
    }

  }

  SetQueryOptionsData(data : any) {
    this.pages = data.KANDUNGAN.map(obj =>{ 
      let rObj = {};
      let obj_m = obj;
      rObj['main'] = obj.TAJUK.MAIN;
      rObj['child'] = obj.TAJUK.CHILD.map(function(obj,i){
        let child = {};
        if(obj_m.TAJUK.c_in != undefined && obj_m.TAJUK.c_in[i].length > 0)child['c_in'] = obj_m.TAJUK.c_in[i];
        child['title'] = obj;
        let comp_name = obj.substr(0, obj.search(" ") - 1);
        child['component'] = comp_name;
        return child;
      });
      return rObj;
    })

    this.pages_ = data.KANDUNGAN.map(obj =>{ 
      let rObj = {};
      rObj['main'] = obj.TAJUK.MAIN;
      rObj['child'] = obj.TAJUK.CHILD.map(function(obj,i){
        let child = {};
        child['title'] = obj;
        let comp_name = obj.substr(0, obj.search(" ") - 1);
        child['component'] = comp_name;
        return child;
      });
      return rObj;
    })

    this.pages_sea = this.pages_;
  }

  openPage(child) {
    this.navCtrl.push(child.component);
  }

  

}
