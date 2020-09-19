
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
  

  constructor() { }

  ngOnInit(): void {
  }

  gettProjecs(){
    let list:String[]=[]
    this.projectos.forEach(element => {
      let newElement = `<div class="col-4">
      <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:100%">
          <div class="container">
              <h4><b>John Doe</b></h4>
              <p>~{{element.position}}</p>
          </div>
      </div>
  </div>`
      list.push(newElement)
    });
    console.log("before printing a list")
    console.log(list)
    return list
  }

}
