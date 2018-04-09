
import { Component, NgZone } from '@angular/core';
import { NavController, Platform, Events, NavParams, Nav } from 'ionic-angular';
import { IBeacon } from '@ionic-native/ibeacon';
import { DetailPage } from './../detail/detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Parameters for beacons
  uuid:   string;
  beaconId: string;
  major:  number;
  minor:  number;
  rssi:   number;

  delegate: any;
  region:   any;

  beaconFound: boolean;

  // Beacon list to store scanned beacons information
  beaconList: any = [];
  constructor(public navCtrl: NavController,
              public platform: Platform,
              public ngzone: NgZone,
              private events: Events,
              public navParams: NavParams,
              private ibeacon: IBeacon,
              public nav: Nav) {
    
  }
  ////////// MAIN BODY EVERYTHING GOES HERE ////////////
  ionViewDidLoad() {

    this.initializeBeacon();

    this.startScanning();

    this.onBeaconsDiscovered();

  }

  // Initialize Beacon

  initializeBeacon() {
    // Request for authorization
    this.ibeacon.requestAlwaysAuthorization();
    // Declare Delegate
    this.delegate = this.ibeacon.Delegate();
    // Declare Beacon attributes
    this.uuid = '9A305319-5A3C-4287-AE28-1AC0128E08AA';
    this.beaconId = 'Toronto Showroom';
    // Create Beacon Region based on those parameters
    this.region = this.ibeacon.BeaconRegion(this.beaconId,this.uuid);
  }///////
  // End of Initialization


  // Start sacnning for beacons
  startScanning() {
    this.ibeacon.startRangingBeaconsInRegion(this.region).then(() => {
      console.log("startedRangingBeaconsInRegion");
      },
      error => {
        console.error('Failed to begin monitoring: ', error);
      }
    );
  }///////

  // If -Beacon discovered
  onBeaconsDiscovered() {
    this.beaconFound = true;
    this.delegate.didRangeBeaconsInRegion().subscribe( data => {
      this.ngzone.run(() => {
        this.beaconList = data.beacons,
        this.beaconList.forEach((beacon) => {
          if (this.beaconList.findIndex((bc:any) => bc.minor === beacon.minor) == -1)
            this.beaconList.push(beacon);
        })
      })
    })

 
  }///////


  selectBeacon(beacon) {
    this.navCtrl.push(DetailPage, {
      beacon: beacon
    });
  }

  goHome() {
    this.nav.setRoot(HomePage);
  }

  

}///////
