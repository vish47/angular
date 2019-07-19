import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserharshComponent } from './userharsh/userharsh.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CitizenLoginComponent } from './citizen-login/citizen-login.component';
import{AdminComponent} from './admin/admin.component';
const routes: Routes = [
{path:' ',redirectTo:' ',pathMatch: 'full'},
{path:'login',component:UserharshComponent},
{path:'createCustomer',component:CreateCustomerComponent},
{path:'CitizenLogin',component:CitizenLoginComponent},
{path:'Admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
