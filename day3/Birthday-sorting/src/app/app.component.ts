import { Component } from '@angular/core';
import { UsersAPIService } from './users-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Birthday-sorting'
  test = "testing"
  option = ""
  demo =""

  modifyTable(option:string){
    this.option = option
  }
}
