import {Component, OnInit} from '@angular/core';
import {SingleGeoPoint} from '../single-geo-point';
import {KeyValue} from '@angular/common';
import {GeopointService} from '../geopoint.service';

@Component({
  selector: 'app-geopoints',
  templateUrl: './geopoints.html',
  styleUrls: ['./geopoints.css']
})
export class GeopointsComponent implements OnInit {
  geopoints: SingleGeoPoint[] = [];

  selectedGeoData?: KeyValue<string, number>;

  geopoint: SingleGeoPoint = {
    id: '123993577',
    data: new Map([
      ['name', 2],
      ['country', 5],
    ])
  };

  constructor(private geoService: GeopointService) {
  }

  ngOnInit(): void {
    this.getGeopoints();
  }

  onSelect(data: KeyValue<string, number>): void {
    this.selectedGeoData = data;
  }

  getGeopoints(): void {
    this.geopoints = this.geoService.getGeopoints();
  }
}
