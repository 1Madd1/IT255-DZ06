import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Soba } from '../model/soba';

@Component({
  selector: 'app-soba',
  templateUrl: './soba.component.html',
  styleUrls: ['./soba.component.css']
})
export class SobaComponent implements OnInit {

  sobe: Soba[] = [];
  soba: Soba;
  dodatneUsluge: string[] = [];

  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      brojSobe: ['', Validators.required],
      sprat: ['', Validators.required],
      brMesta: ['', Validators.required],
      cena: ['', Validators.required],
      dodatnaUsluga1: ['', Validators.required],
      dodatnaUsluga2: ['', Validators.required],
      dodatnaUsluga3: ['', Validators.required]
    });
  }

  sobaValidation(brojSobe: string, sprat: string, brMesta: string, cena: string): boolean {
    var pomBrSobe: number = parseInt(brojSobe);
    var pomSprat: number = parseInt(sprat);
    var pomBrMesta: number = parseInt(brMesta);
    var pomCena: number = parseInt(cena);
    if (Number.isNaN(pomBrSobe) || Number.isNaN(pomSprat) || Number.isNaN(pomBrMesta) || Number.isNaN(pomCena)) {
      return false;
    }
    return true;
  }

  addSoba(brojSobe: string, sprat: string, brMesta: string, cena: string, dodatnaUsluga1: HTMLInputElement, dodatnaUsluga2: HTMLInputElement, dodatnaUsluga3: HTMLInputElement): boolean {
    this.soba = new Soba();
    this.dodatneUsluge.splice(0);
    var pomBrSobe: number = parseInt(brojSobe);
    var pomSprat: number = parseInt(sprat);
    var pomBrMesta: number = parseInt(brMesta);
    var pomCena: number = parseInt(cena);
    if (this.sobe != undefined) {
      for (let i = 0; i < this.sobe.length; i++) {
        console.log("Duzina niza: " + this.sobe.length);
        console.log("Trenutni index : " + i);
        console.log("Postojeci sprat: " + this.sobe[i].sprat + "; Postojeca soba: " + this.sobe[i].brojSobe);
        console.log("Unesen sprat: " + pomBrSobe + "; Unesena soba: " + pomBrSobe);
        console.log("-----------------------");
        if (this.sobe[i].sprat == pomSprat && this.sobe[i].brojSobe == pomBrSobe) {
          alert("Broj sobe i broj sprata ne sme biti isti sa postojecom sobom!");
          return false;
        }
      }
    }
    if (Number.isNaN(pomBrSobe) || Number.isNaN(pomSprat) || Number.isNaN(pomBrMesta) || Number.isNaN(pomCena)) {
      alert("Unesite pravilno sve podatke!");
    } else {
      this.soba.brojSobe = parseInt(brojSobe);
      this.soba.sprat = parseInt(sprat);
      this.soba.brMesta = parseInt(brMesta);
      if (dodatnaUsluga1.checked) {
        pomCena += parseInt(dodatnaUsluga1.value);
        this.dodatneUsluge.push("Klima uredjaj");
      }
      if (dodatnaUsluga2.checked) {
        pomCena += parseInt(dodatnaUsluga1.value);
        this.dodatneUsluge.push("Mini bar");
      }
      if (dodatnaUsluga3.checked) {
        pomCena += parseInt(dodatnaUsluga1.value);
        this.dodatneUsluge.push("Sauna");
      }
      this.soba.cena = pomCena;
      this.soba.dodatneUsluge = this.dodatneUsluge;
      this.sobe.push(this.soba);
      this.sobe.sort((v1,v2) => {
        if (v1.sprat > v2.sprat) {
            return 1;
        }
    
        if (v1.sprat < v2.sprat) {
            return -1;
        }
    
        return 0;
    });
      this.angForm.reset();
    }
    return false;
  }

  zbirUsluge(dodatnaUsluga1: HTMLInputElement, dodatnaUsluga2: HTMLInputElement, dodatnaUsluga3: HTMLInputElement): number {
    var ukupanZbir = 0;
    if (dodatnaUsluga1.checked) {
      ukupanZbir += parseInt(dodatnaUsluga1.value);
    }
    if (dodatnaUsluga2.checked) {
      ukupanZbir += parseInt(dodatnaUsluga2.value);
    }
    if (dodatnaUsluga3.checked) {
      ukupanZbir += parseInt(dodatnaUsluga3.value);
    }

    return ukupanZbir;
  }

  ngOnInit(): void {
  }

}
