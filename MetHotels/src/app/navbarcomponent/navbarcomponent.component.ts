import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarcomponent',
  templateUrl: './navbarcomponent.component.html',
  styleUrls: ['./navbarcomponent.component.css']
})
export class NavbarcomponentComponent implements OnInit {

  constructor() { }

  clicked: boolean = false;
  

  onInfo() {
    var info_div = document.getElementById("info");
    if (info_div?.style.display == "" || info_div?.style.display == "none") {
      info_div.style.display = "block";
    } else {
      info_div!.style.display = "none";
    }
  }

  ngOnInit(): void {
  }

}
