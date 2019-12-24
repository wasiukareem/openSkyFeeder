import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  AUTH_STATE: string;
  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('auth')) {
      this.AUTH_STATE = '/dashboard';
      this.router.navigateByUrl('/dashboard');
    }
    else {
      this.AUTH_STATE = '/login';
    }
  }
  
  login(form: any) {
    let username = form.controls['username'].value;
    let passwd = form.controls['password'].value;
    if(username.toLowerCase() === "demo" && passwd.toLowerCase() === "demo") {
      localStorage.setItem('auth', "ONLINE");
      this.router.navigateByUrl('/dashboard');
    }
    else {
      alert("Error"); return false;
    }
  }

}
