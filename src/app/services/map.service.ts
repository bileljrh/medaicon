import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import * as L from 'leaflet';


@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  capitals: string = 'http://localhost:3000/data';

  constructor(private http: HttpClient) {
  }

  makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res) {
        const lat = c.coordinates[0];
        const lon = c.coordinates[1];
        const marker = L.marker([lon, lat]).addTo(map);
        marker.bindPopup('<center> <p><strong><a class="btn btn-success" href="#"> get APPOINTTMENET</a></strong></p></center>'

        )
      }
    });
  }
}