import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Device } from '@ionic-native/device';


@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  isLoggedIn: boolean;
  @ViewChild('password') pwd;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public nav: Nav,
    private toastCtrl: ToastController,
    private device: Device) {
    this.isLoggedIn = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  goHome() {
    this.nav.setRoot(HomePage);
  }

  logIn() {
    // Validate password
    if (this.pwd.value.toLowerCase() == this.device.serial.toLowerCase()) {
      let toast = this.toastCtrl.create({
        message: 'Loggin in',
        duration: 1200,
        position: 'bottom'
      });
  
      toast.present();
      this.isLoggedIn = true;
    }
    else {
      let toast = this.toastCtrl.create({
        message: 'Wrong password',
        duration: 1500,
        position: 'middle'
      });
      
      toast.present();
    }
  }



  discardContent() {
    this.nav.setRoot(AdminPage);
    this.isLoggedIn = false;
  }

  saveContent() {
    let toast = this.toastCtrl.create({
      message: 'Logging out',
      duration: 800,
      position: 'middle'
    });

    toast.present();
    this.nav.setRoot(HomePage);
    this.isLoggedIn = false;
  }
}
