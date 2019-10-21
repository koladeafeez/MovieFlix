import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mouseoverLogin;
  userName;
emailAddress;
password;
  constructor(private router: Router,
    private authservice: AuthService) { }

  ngOnInit() {
  }

  goHome(){
    
  }
  login(formvalue){
    this.authservice.loginUser(formvalue.userName, formvalue.password);
   this.router.navigate(['/movies']);
  }
}

