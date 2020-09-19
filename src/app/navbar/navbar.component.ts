import { Component, OnInit } from '@angular/core';
// import { Routes } from '@angular/router';
import { Routes,Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LinkTestComponent } from '../link-test/link-test.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor() { }
  
  changeActive(id:string){
    var navIds = ["Work","About","Contact"]
    for (let index=0;index< navIds.length; index++){
      if(navIds[index] === id){
        document.getElementById(id).setAttribute("class","nav-item active")
      }
      else document.getElementById(navIds[index]).setAttribute("class","nav-item")
    }
    
  }

  ngOnInit(): void {
  }

}
