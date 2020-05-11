import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  employeeName:string='abc';
  imageurl:string="assets/image/angular.jpg";

  employees:Employee[]=[{Name:'Zach', Age:30, Exp:3},{Name:'Eric', Age:30, Exp:3}];

  ngOnInit(): void {
  }


  btnClick()
  {
    this.employeeName="efgh";
  }
}
  

interface Employee{
Name:string,
Age:number,
Exp:number
}