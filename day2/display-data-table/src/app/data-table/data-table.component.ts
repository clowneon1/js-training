import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../data-api.service';
import { Data } from './Data';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {

  dataSource: any = [];
  //headings = ["ID", "USERID", "TITLE", "BODY"];
  displayedColumns: string[] = ['id', 'userId', 'title', 'body'];
  constructor(private dataInst: DataApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.dataInst.getData().subscribe(response =>{
      this.dataSource = response;
      //console.log(this.dataSource);
    });
  }
}
