
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import  projectsJson from "../projects.json";

@Component({
  selector: 'app-control-pannels',
  templateUrl: './control-pannels.component.html',
  styleUrls: ['./control-pannels.component.css']
})
export class ControlPannelsComponent implements OnInit {
  projectos:{position:String,name:String,description:String,image:String,link:String}[] = projectsJson.projects
  

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
  

}
