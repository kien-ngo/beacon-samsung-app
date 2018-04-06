import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
//import { PhotoViewer } from '@ionic-native/photo-viewer';

@IonicPage()
@Component({
  selector: 'page-floor',
  templateUrl: 'floor.html',
})
export class FloorPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public nav: Nav) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FloorPage');
  }

  goHome() {
    this.nav.setRoot(HomePage);
  }
}
