import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AppComponent } from './home/app.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [{path:'employee',component:EmployeeComponent},
                        {path:'dashboard',component:DashboardComponent},
                        {path:'',redirectTo:'dashboard',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
