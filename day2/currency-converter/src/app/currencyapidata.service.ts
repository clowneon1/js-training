import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyapidataService {

  constructor(private http:HttpClient) {}

  getConvertedData(country1:String, country2: String, value:Number){
    let url = 'https://api.exchangerate.host/convert?from=' + country1 + '&to=' + country2+'&amount='+value;
    return this.http.get(url);
  }

  getCountries(){
    let url = "https://api.exchangerate.host/symbols"
    return this.http.get(url);
  }

}
