import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Device } from '@ionic-native/device';
/*
  Generated class for the JsonDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JsonDataProvider {

  test: number;
  public params: any;
  uuid: any;
  serialNumber: any;

  constructor(public http: HttpClient, private device: Device) {
    console.log('Hello JsonDataProvider Provider');
    this.getData();
    this.test = 4;
    this.uuid = this.device.uuid;
    this.serialNumber = this.device.serial;
  }


  getData() {
    //'https://jsonplaceholder.typicode.com/users'

    let url = 'https://api.myjson.com/bins/f6b77';
    let data: Observable<any> = this.http.get(url);
    data.subscribe(res => {
      // Do things here
      console.log('Got in');
    });

    return data;
  }
}

