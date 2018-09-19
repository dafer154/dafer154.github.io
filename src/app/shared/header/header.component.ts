import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  personalLinks = {
    linkedin: 'https://linkedin.com/in/davidfza25',
    github: 'https://github.com/dafer154',
    twitter: 'https://twitter.com/@david_fza',
    instagram: 'https://www.instagram.com/dafer154/',
    facebook: 'https://www.facebook.com/David.FZA'
  };

  constructor() { }

  ngOnInit() {
  }

}
