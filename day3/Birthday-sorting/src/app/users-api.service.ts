import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersAPIService {
  constructor(private http : HttpClient) {
   }

  getData(){
    let url = "./assets/users.json";
    return this.http.get(url);
  }
}
