import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Device } from '@ionic-native/device';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  serialNumber: any;
  uuid: any;
  params: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public nav: Nav,
    private device: Device,
    private http: HttpClient) {

      this.serialNumber = this.device.serial;
      this.uuid = this.device.uuid;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
    this.http.get('http://greenrackservice.blob.core.windows.net/samsung-ca/sys/app-config-en.json').subscribe(data => {
      console.log(data);
      this.params = data;
      JSON.parse(this.params);
    });
  }

  goHome() {
    this.nav.setRoot(HomePage);
  }
}
 