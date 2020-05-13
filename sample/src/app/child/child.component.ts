import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {UserDetails} from '../Models/UserDetails'



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input('userDetails1') userDetails:UserDetails;
  @Output('datafromchild1') datafromchild= new EventEmitter();

  ngOnInit(): void {

  }

  childClick()
  {
    this.datafromchild.emit("Hey, Child here");
  }
}

