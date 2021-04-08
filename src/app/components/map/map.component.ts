import { Component, OnInit,AfterViewInit } from '@angular/core';

import * as L from 'leaflet';
import { MarkerService } from 'src/app/services/map.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  
  private map;

  constructor(private markerService: MarkerService) {
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeCapitalMarkers(this.map);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [10.1513671875,
        36.77409249464195],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
}
