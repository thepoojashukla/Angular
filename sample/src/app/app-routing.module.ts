import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AppComponent } from './home/app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParentComponent  } from './parent/parent.component';
import {BabyComponent} from './baby/baby.component';
import {ChildComponent} from './child/child.component'
import { CountriesComponent } from './countries/countries.component';


const routes: Routes = [{path:'employee',component:EmployeeComponent},
                        {path:'dashboard',component:DashboardComponent},
                        //{path:'',redirectTo:'dashboard',pathMatch:'full'},
                        {path:'child',component : ChildComponent},
                        {path:'baby', component:BabyComponent},
                        {path:'parent',component:ParentComponent ,pathMatch:'prefix'},
                        {path:'countries', component:CountriesComponent}]; //'full'

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
