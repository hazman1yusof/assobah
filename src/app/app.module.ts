import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { IonicStorageModule } from '@ionic/storage';

import { Autosize } from '../components/autosize';

import { note } from '../pages/note/note';
import { add_note } from '../pages/add_note/add_note';
import { kandungan } from '../pages/kandungan/kandungan';

import { AllData } from '../providers/all-data';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

@NgModule({
  declarations: [
    MyApp,
    note,
    add_note,kandungan,
    Autosize
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    note,
    add_note,kandungan
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AllData,
    StatusBar,
    SplashScreen,
  ]
})
export class AppModule {}
