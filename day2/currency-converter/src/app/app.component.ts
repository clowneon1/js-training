import { Component, ɵresetJitOptions } from '@angular/core';
import { setupTestingRouter } from '@angular/router/testing';
import { CurrencyapidataService } from './currencyapidata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-converter';
  resultjson : any =[];
  countryJson: any =[];
  countries:any = [];
  base = 'AED';
  target = 'AED';
  baseC = 'United Arab Emirates Dirham';
  targetC = 'United Arab Emirates Dirham';
  value = 1;
  result = 1;

  constructor(private currency:CurrencyapidataService){
    this.getCountries();
  }

  set(){

  }

  changeBase(str : string){
    this.base = str;
    this.baseC = this.countryJson.symbols[this.base].description;
  }

  changeTarget(str : string){
    this.target= str;
    this.targetC = this.countryJson.symbols[this.target].description;
  }

  convert(){

    this.currency.getConvertedData(this.base,this.target,this.value).subscribe(data =>{
      //console.log(data);
      this.resultjson = JSON.stringify(data);
      this.resultjson = JSON.parse(this.resultjson);
      this.result = this.resultjson.result;
    });
  }

  getCountries(){
    this.currency.getCountries().subscribe(data =>{
      // console.log(data);
      this.countryJson = JSON.stringify(data);
      //console.log(this.countryJson);
      this.countryJson = JSON.parse(this.countryJson);
      //console.log(this.countryJson);
      for(let country in this.countryJson.symbols){
        this.countries.push([country]);
      }
    });
  }

  //no use it was for if i were to use innerHtml to inflate options.
  createCountriesOptions(){
    let options = "";
    for(let i = 0; i< this.countries.length;i++){
      options += "<option value ='"+this.countries[i]+"'>"+this.countries[i]+"</option>";
    }
    return options;
  }
}
