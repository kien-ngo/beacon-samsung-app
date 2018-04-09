import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Device } from '@ionic-native/device';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  serialNumber: any;
  uuid: any;
  public params: any;
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public nav: Nav,
    private device: Device,
    public http: HttpClient) {

      this.serialNumber = this.device.serial;
      this.uuid = this.device.uuid;
      
  }
//
  ionViewDidLoad() {
    this.getData();
  } 

  goHome() {
    this.nav.setRoot(HomePage);
  }

  getData() {
    //'https://jsonplaceholder.typicode.com/users'
    let url = 'https://jsonplaceholder.typicode.com/users';
    let data: Observable<any> = this.http.get(url);
    data.subscribe(res => {
      this.params = res;
    });
  }
}
