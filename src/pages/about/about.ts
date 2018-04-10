import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
import { JsonDataProvider } from '../../providers/json-data/json-data';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  serialNumber: any;
  uuid: any;
  
  

  // JSON
  _myUrl_: any;
  version:any;
  beaconProtocol: any;
  beaconFilter: any;
  beenThereTimeout: any;
  deviceIdLength: any;
  visitorIdRegex: any;
  adminPasswordLength: any;
    // -- Parameter
  parameters: any;
  defaultSplashColours: any;
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public nav: Nav,
    public jsonDataProvider: JsonDataProvider) {

      this.serialNumber = this.jsonDataProvider.serialNumber;
      this.uuid = this.jsonDataProvider.uuid;
      this.jsonDataProvider.getData().subscribe(res => {
        
        this._myUrl_ = res._myUrl_;
        this.version = res.version;
        this.beaconProtocol = res.beaconProtocol;
        this.beaconFilter = res.beaconFilter;
        this.beenThereTimeout = res.beenThereTimeout;
        this.deviceIdLength = res.deviceIdLength;
        this.visitorIdRegex = res.visitorIdRegex;
        this.adminPasswordLength = res.adminPasswordLength;
        // Parameters
        this.parameters = res.parameters;
        this.defaultSplashColours = res.parameters.defaultSplashColours;

      });
  }
//
  ionViewDidLoad() {

  } 

  goHome() {
    this.nav.setRoot(HomePage);
  }

}
