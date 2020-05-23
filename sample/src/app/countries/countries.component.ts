import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CovidService } from '../service/covid.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  allCountries:any=[];
  covidSummary:any=[];
  covidSub:Subscription;

  constructor(private covidService:CovidService) { }

  ngOnInit(): void {
    this.covidSub=  this.covidService.getCovidSummary().subscribe(
      res=>{
      this.covidSummary=res; 
      this.allCountries = this.covidSummary.Countries;
      //console.log(this.countries);     
      res},err=>{console.log(err)});

    //this.countries = this.covidSummary.Countries;
    console.log(this.allCountries);     
  }
  ngOnDestroy()
   {
     this.covidSub.unsubscribe();
   }
}
