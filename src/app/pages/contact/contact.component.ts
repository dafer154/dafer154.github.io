import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  latitude = 3.404913;
  longitude = -76.524231;
  minZoom = 14;

  city = 'Cali';
  country = 'Colombia';
  email = 'zuluaaristi@gmail.com';
  skype = '@david_fza';


  constructor() { }

  ngOnInit() {
  }

}
