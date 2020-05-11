import { Component, OnInit } from '@angular/core';
import { CovidService } from '../service/covid.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  columns:string[]=["country","Total cases","Total Recovered" ];
  covidSummary:any=[];
  covidSummaryUntouched:any=[];
  searchtxt:string='';
  constructor(private covidSer:CovidService) { }

  ngOnInit(): void {
    this.covidSer.getCovidSummary().subscribe(res=>{
    this.covidSummaryUntouched=res;
    this.searchchange('');
      res},err=>{console.log(err)});
  }


  searchchange(data)
  {
    this.covidSummary.Countries=[];
    this.covidSummary.Countries=this.covidSummaryUntouched.Countries.filter(countrysum => {
      if(countrysum.Country.toLowerCase().indexOf(data.toLowerCase())!=-1)
      return true;
    });
  }

}
