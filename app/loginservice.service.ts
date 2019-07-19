import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
   public str:string;

  constructor(private http:HttpClient) 
  { 

  }

  getuserdata(username:string,pass:string): Observable<any>
  { 
    console.log(username,pass);
    this.str="http://localhost:7070/activecity/Admin"+"/"+username+"/"+pass;
    console.log(this.str);
return this.http.get(this.str);
  }
  createCustomer(customer: Object): Observable<Object> {
    this.str="http://localhost:7070/activecity/Citizen/register";
    return this.http.post(`${this.str}`, customer);
  }

  getCitizen(cusername:string,cpass:string): Observable<any>
  { 
    console.log(cusername,cpass);
    this.str="http://localhost:7070/activecity/Citizen"+"/"+cusername+"/"+cpass;
    console.log(this.str);
     return this.http.get(this.str);

  }
}
