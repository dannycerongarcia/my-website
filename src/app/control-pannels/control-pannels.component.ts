
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import value from '../projects.json';
import  projectsJson from "../projects.json";

@Component({
  selector: 'app-control-pannels',
  templateUrl: './control-pannels.component.html',
  styleUrls: ['./control-pannels.component.css']
})
export class ControlPannelsComponent implements OnInit {
  projectos:{position:String,name:String,description:String,image:String,link:String}[] = projectsJson.projects
  
  name;
  getName(value:string){if(value){this.name = value}}
  email;
  getEmail(value:string){if(value){this.email = value}}
  subject;
  getSubject(value:string){if(value){this.subject = value}}
  message;
  getMessage(value:string){if(value){this.message = value}}
  constructor() {
    
   }

  ngOnInit(): void {
  }
  displayPDF(): void{
    document.getElementById("myModal").style.display = "block";
  }
  closePDF(): void{
    document.getElementById("myModal").style.display = "none";
  }
  sendForm(){
    
    console.log(this.name+this.email+this.subject+this.message)
  }
  

}
