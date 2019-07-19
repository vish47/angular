import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Citizen } from '../citizen';


@Component({
  selector: 'app-citizen-login',
  templateUrl: './citizen-login.component.html',
  styleUrls: ['./citizen-login.component.css']
})
export class CitizenLoginComponent implements OnInit {
  public CitizenLogin=Citizen;

 

  constructor(public src:LoginserviceService) { }
  


  userModel=new Citizen('','');
  
  onSubmit()
  {
    console.log(this.userModel);
    this.display();
  }
  
    ngOnInit() {
      
    }
    public display()
  {
  this.src.getCitizen(this.userModel.cusername,this.userModel.cpass).subscribe(data =>{this.CitizenLogin=data,error => console.log(error);
  console.log(this.CitizenLogin);
  });  }







}
