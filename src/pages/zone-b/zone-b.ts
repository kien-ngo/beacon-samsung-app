import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ZoneBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zone-b',
  templateUrl: 'zone-b.html',
})
export class ZoneBPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav: Nav) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZoneBPage');
  }

  goHome() {
    this.nav.setRoot(HomePage);
  }
}
