import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {

  data: Object;
  loading: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  makeRequest() {
    this.loading = true;
    this.http.get("http://localhost:3000/sobe").subscribe(data => {
      this.data = data;
      this.loading = false;
    })
  }

  makePost() {
    this.loading = true;
    this.http.post("http://localhost:3000/sobe", {
      id: 5,
      brojSobe: 4,
      sprat: 4,
      brMesta: 3,
      brNoci: 3,
      cena: 1000,
      dodatneUsluge: "",
      ukupnaCena: 3000
    }).subscribe(data => {
      this.data = data;
      console.log(data);
      this.loading = false;
    })
  }

  makePut() {
    this.loading = true;
    this.http.put("http://localhost:3000/sobe/2", {
      id: 2,
      brojSobe: 4,
      sprat: 1,
      brMesta: 2,
      brNoci: 4,
      cena: 1500,
      dodatneUsluge: "",
      ukupnaCena: 6000
    }).subscribe(data => {
      this.data = data;
      this.loading = false;
    })
  }

  makeDelete() {
    this.loading = true;
    this.http.delete("http://localhost:3000/sobe/1").subscribe(data => {
      this.data = data;
      this.loading = false;
    })
  }

}
