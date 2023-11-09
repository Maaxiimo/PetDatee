import { Injectable } from '@angular/core';
import { CallbackID, Geolocation, Position,} from '@capacitor/geolocation';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationServiceService {

  constructor() { }

 
  async getCurrentPosition(options?: PositionOptions | undefined): Promise<Position> {
    try {
      return await Geolocation.getCurrentPosition(options);
    } catch (error) {
      throw error;
    }
  }


}

