import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  devSkills = {
    frontEnd: '60%',
    backEnd: '70%',
    sourceControl: '90%',
    dataBase: '70%',
    devOps: '10%',
    iOT: '40%'
  }

circularConfig = {
    max: 100,
    color: '52b3d9',
    background: '3a4149',
    responsive: true,
    radius: 140
  }

circularData = {
    leadership: 80,
    creativity: 90,
    confidence: 100,
    communication: 80,
    english: 60,
    spanish: 100

  }


  constructor() { }

  ngOnInit() {
  }

}
