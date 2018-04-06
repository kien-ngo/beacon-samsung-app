import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AdminPage } from '../pages/admin/admin';
import { FloorPage } from '../pages/floor/floor';
import { ZoneAPage } from '../pages/zone-a/zone-a';
import { ZoneBPage } from '../pages/zone-b/zone-b';
import { HelpPage } from '../pages/help/help';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: any}>;

  icons: string[];

  menuItem: string[];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home'},
      { title: 'Floor Plan', component: FloorPage, icon: 'list' },
      { title: 'Zone A', component: ZoneAPage, icon: 'list' },
      { title: 'Zone B', component: ZoneBPage, icon: 'list' },
      { title: 'Help', component: HelpPage, icon: 'help-circle'},
      { title: 'About', component: AboutPage, icon: 'information-circle'},
    ];

    this.icons = ['briefcase','browsers','bulb','calendar','card','chatbubbles','cloud','cube'];

    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goAdmin() {
    this.nav.setRoot(AdminPage);
  }
}
