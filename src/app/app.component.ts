import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav  } from 'ionic-angular';

import { kandungan } from '../pages/kandungan/kandungan';

import { AllData } from '../providers/all-data';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = kandungan;
  pages: Array<{main: string, child:any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public menu: MenuController,
    public alldata: AllData,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.alldata.getKandungan().then(data => {
      this.SetQueryOptionsData(data);
    });
  }

  SetQueryOptionsData(data : any) {
    this.pages = data.KANDUNGAN.map(obj =>{ 
      let rObj = {};
      rObj['main'] = obj.TAJUK.MAIN;
      rObj['child'] = obj.TAJUK.CHILD.map(obj =>{
        let child = {};
        child['title'] = obj;
        let comp_name = obj.substr(0, obj.search(" ") - 1);
        child['component'] = comp_name;
        return child;
      });
      return rObj;
    })

  }

  openPage(child) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(child.component);
  }

  kandungan() {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(kandungan);
  }
}

