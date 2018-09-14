import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  

  latitude = 3.404913;
  longitude = -76.524231;
  minZoom = 14;

  constructor() { }

  ngOnInit() {
  }

}
