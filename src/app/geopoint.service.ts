import {Injectable} from '@angular/core';
import {SingleGeoPoint} from './single-geo-point';
import {GEOPOINTS} from './mock-geopoints';

@Injectable({
  providedIn: 'root'
})

export class GeopointService {

  constructor() {
  }

  getGeopoints(): SingleGeoPoint[] {
    return GEOPOINTS;
  }
}




