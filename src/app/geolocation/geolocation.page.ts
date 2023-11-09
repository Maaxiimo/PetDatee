import { Component, OnInit } from '@angular/core';
import {
  CallbackID,
  Geolocation,
  PositionOptions,
  GeolocationPluginPermissions,
} from '@capacitor/geolocation';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {
  currentPosition: any;
  callbackId: CallbackID | undefined; // Cambio aquí

  constructor() { }

  ngOnInit() {
  }

  async printCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.currentPosition = coordinates;
    console.log('Current position:', coordinates);
  }


}
