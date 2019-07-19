import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { User } from '../user';
import { Citizen } from './user1.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-userharsh',
  templateUrl: './userharsh.component.html',
  styleUrls: ['./userharsh.component.css']
})
export class UserharshComponent implements OnInit {
  public userharsh1=Citizen;
 

  constructor(public src:LoginserviceService,public router:Router) { }
  

  
  userModel=new User('','');
  
  onSubmit()
{
  console.log(this.userModel);
  this.router.navigate(['/Admin']);
  this.display();
}

  ngOnInit() {
    
  }
  public display()
{
this.src.getuserdata(this.userModel.username,this.userModel.pass).subscribe(data =>{this.userharsh1=data,error => console.log(error);
console.log(this.userharsh1);
});  
}

}
