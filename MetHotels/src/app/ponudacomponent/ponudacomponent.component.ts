import { Component, OnInit } from '@angular/core';
import { Ponuda } from '../model/ponuda';

@Component({
  selector: 'app-ponudacomponent',
  templateUrl: './ponudacomponent.component.html',
  styleUrls: ['./ponudacomponent.component.css']
})
export class PonudacomponentComponent implements OnInit {

  constructor() { }

  ponude: Ponuda[] = [];

  onPonude() {
    this.ponude.splice(0);
    this.ponude.push(new Ponuda("Ponuda za studiranje master studije softverskog inzenjerstva za nove studente pocetkom 2023/24. godine studija po manjoj ceni za ", 20));
    this.ponude.push(new Ponuda("Ponuda za studiranje master studije grafickog dizajnera za nove studente pocetkom 2023/24. godine studija za ", 25));
    this.ponude.push(new Ponuda("Ponuda za studiranje master studije developera video igara za nove studente pocetkom 2023/24. godine studija za ", 20));
  }

  offPonude() {
    this.ponude.splice(0);
  }

  ngOnInit(): void {
  }

}
