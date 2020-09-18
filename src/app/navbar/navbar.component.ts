import { Component, OnInit } from '@angular/core';

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
