import { Component, OnInit } from '@angular/core';
import { Citizen } from '../userharsh/user1.model';
import { LoginserviceService } from '../loginservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  public userharsh1=Citizen;

  constructor(public src:LoginserviceService , public router:Router) { }
  public userModel=new Citizen();

  ngOnInit() {
  }
  onSubmit()
  {
    this.router.navigate(['/CitizenLogin'])
    console.log(this.userModel);
    this.display();
  }

  public display()
  {
  this.src.createCustomer(this.userModel).subscribe(data => console.log(data), error => console.log(error)); 
  //console.log(this.data); 
  }

}
