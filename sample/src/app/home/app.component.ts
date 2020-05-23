import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[EmployeeService]
})
export class AppComponent implements OnInit {
  

  constructor() { }

  
  ngOnInit(): void {
 
  }

  /* onClick() : void{
    const dashboardUrl : URL = /localhost:3736/dashboard;
  } */

}
