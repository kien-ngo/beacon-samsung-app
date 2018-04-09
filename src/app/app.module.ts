
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from './../pages/detail/detail';
import { ZoneAPage } from './../pages/zone-a/zone-a';
import { ZoneBPage } from './../pages/zone-b/zone-b';
import { FloorPage } from './../pages/floor/floor';
import { HelpPage } from './../pages/help/help';
import { AboutPage } from './../pages/about/about';
import { AdminPage } from './../pages/admin/admin';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IBeacon } from '@ionic-native/ibeacon';
import { Device } from '@ionic-native/device';
import { PhotoViewer } from '@ionic-native/photo-viewer';


import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    AboutPage,
    AdminPage,
    HelpPage,
    ZoneAPage,
    ZoneBPage,
    FloorPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    AboutPage,
    AdminPage,
    HelpPage,
    ZoneAPage,
    ZoneBPage,
    FloorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IBeacon,
    Device,
    PhotoViewer,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
