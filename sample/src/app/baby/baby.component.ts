import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { CountryModel } from '../CountryModel';


@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.scss']
})
export class BabyComponent implements OnInit {
 
  @Input() country : any = []
  constructor() { }

  ngOnInit()
  {

  }
 
}
