import { Component, OnInit } from '@angular/core';
import { Soba } from '../model/soba';

@Component({
  selector: 'app-soba',
  templateUrl: './soba.component.html',
  styleUrls: ['./soba.component.css']
})
export class SobaComponent implements OnInit {

  sobe: Soba[] = [];
  soba: Soba;

  constructor() { }

  addInfo(brojSobe: HTMLInputElement, sprat: HTMLInputElement, brMesta: HTMLInputElement, cena: HTMLInputElement) {
    this.soba = new Soba();
    var pomBrSobe: number = parseInt(brojSobe.value);
    var pomSprat: number = parseInt(sprat.value);
    var pomBrMesta: number = parseInt(brMesta.value);
    var pomCena: number = parseInt(cena.value);
    console.log(pomBrSobe);
    if (Number.isNaN(pomBrSobe) || Number.isNaN(pomSprat) || Number.isNaN(pomBrMesta) || Number.isNaN(pomCena)) {
      alert("Unesite pravilno sve podatke!");
    } else {
      this.soba.brojSobe = parseInt(brojSobe.value);
      this.soba.sprat = parseInt(sprat.value);
      this.soba.brMesta = parseInt(brMesta.value);
      this.soba.cena = parseInt(cena.value);
      this.sobe.push(this.soba);
    }
    return false;
  }

  ngOnInit(): void {
  }

}
