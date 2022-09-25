import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'display-data-table';
  loader = false;
  buttonDisplay = "Click to Show data";
  
  loadComponent(){
    this.loader = this.loader == false ? true : false;
    if(this.loader){
      this.buttonDisplay = "click to hide data";
    }else{
      this.buttonDisplay = "Click to Show data";
    }
  }
}
