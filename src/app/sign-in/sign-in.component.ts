import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/User';
import { FlightService } from '../Shared/flight.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user : User;
  isDataCorrect : boolean;
  listUsers : User[];
  isConnected : boolean;

  constructor(private service : FlightService , private router : Router) { }

  ngOnInit(): void {
    this.isConnected = false;
    this.user = new User();
    this.service.getAllUsers().subscribe(
      (data : User[]) => this.listUsers = data
    );
  }

  connect(){
    this.service.getSpecificUser(this.user.username, this.user.password).subscribe(
      (data : User[]) => {
        if(data.length==0){
          this.isDataCorrect = false;
        } else {
          this.user = data[0];
          this.isDataCorrect = true;
          localStorage.setItem("userConnected",JSON.stringify(this.user));
          this.isConnected = true;
        }
       }
    );
  }

  goToSignUp(){
    this.router.navigate(['/SignUp'])
  }

}
