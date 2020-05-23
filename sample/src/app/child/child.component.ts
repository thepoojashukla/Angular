import { Component, OnInit, Input, Output, EventEmitter,SimpleChange,SimpleChanges } from '@angular/core';
import {UserDetails} from '../Models/UserDetails'
import {Router} from '@angular/router';




@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(private router:Router) { }
 demotemplatevar : string ="from Child Component"
  @Input('userDetails1') userDetails:UserDetails;                  //pass object from one parentcomponent(@input is written) to child
  @Output('datafromchild1') datafromchild= new EventEmitter(); //passing data FROM CHILD TO PARENT through event using Emitter event and in html use $ EVENT
  
 
  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
   }

  ngOnInit(): void {

  }

  childClick()
  {
    this.router.navigate(['dashboard']);
    this.datafromchild.emit("Hey, Child here");
  }
}

