import { Component, OnInit } from '@angular/core';
import { Preporuka } from '../model/preporuka';

@Component({
  selector: 'app-preporukacomponent',
  templateUrl: './preporukacomponent.component.html',
  styleUrls: ['./preporukacomponent.component.css']
})
export class PreporukacomponentComponent implements OnInit {

  constructor() { }
  preporuke: Preporuka[] = [];

  onPreporuke() {
    this.preporuke.splice(0);
    this.preporuke.push(new Preporuka("Rostilj Zaplanjac u okolini fakulteta"));
    this.preporuke.push(new Preporuka("THINK Innovative Hub"));
    this.preporuke.push(new Preporuka("Kafana Bolji Zivot"));
  }

  offPreporuke() {
    this.preporuke.splice(0);
  }

  ngOnInit(): void {
  }

}
