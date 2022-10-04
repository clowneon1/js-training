import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UsersAPIService } from '../users-api.service';


// export interface User{
//   name:string
//   dob:Date
// }

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit,OnChanges {

  @Input() radio: any;

  demo = ""
  dataArray:any=[]

  displayedColumns = ['name', 'dob']
  headers = ["Name", "Date of Birth"]

  constructor(private service: UsersAPIService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['radio']){
      this.sortData()
    }
  }

  ngOnInit(): void {
    this.fetchUsers()
  }

  fetchUsers(){
    this.service.getData().subscribe( data => {
       //console.log(data)
        this.demo = JSON.stringify(data)
        this.dataArray = data
    })
  }

  sortData(){
    if(this.radio == "name"){
      this.sortByName()
    }else if(this.radio == "dob"){
      this.sortByDOB()
    }
  }

  sortByName(){
    this.dataArray = this.dataArray.sort((a:any, b:any) =>
      {
        if(a.name > b.name) return 1
        else if(a.name < b.name) return -1;
        else return 0;

      })
  }

  sortByDOB(){
    this.dataArray = this.dataArray.sort((a:any, b:any) =>
    {
      let adate = new Date(a.dob)
      let bdate = new Date(b.dob)
      if(adate > bdate) return 1
      else if(adate < bdate) return -1
      else return 0
    })
  }

  // if(this.radio == "name"){
  //   this.sortByName()
  // }else if(this.radio == "dob"){
  //   this.sortByDOB()
  // }

}
