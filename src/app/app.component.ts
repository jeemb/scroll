import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  location = window.pageYOffset;
  section1 = null;
  section2 = null;
  section3 = null;
  section4 = null;
  ngOnInit() {
    this.section1 = document.getElementById("section1");
    this.section2 = document.getElementById("section2");
    this.section3 = document.getElementById("section3");
    this.section4 = document.getElementById("section4");

    document.addEventListener("scroll",(e)=>{
        this.location = window.pageYOffset;
        console.log(this.location);
    })
  }

  isActive(key) {

      if (this.location+40 > this[key].offsetTop && this.location+40 < this[key].offsetTop + this[key].offsetHeight ){
          return "active";
      } else {
          return "notActive";
      }
  }
}
