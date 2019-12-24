import { Component, OnInit} from '@angular/core';
//import { ApiService } from '../../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OpenSkyFeeder';
  AUTH_STATE: string;
  AUTH_LINK: string;
  constructor(private router: Router) { }
  
  ngOnInit() {
    if(localStorage.getItem('auth')) {
      this.AUTH_STATE = 'dashboard';
      this.AUTH_LINK = 'logout';
      this.router.navigateByUrl('/dashboard');
    }
    else {
      this.AUTH_LINK = 'login';
      this.AUTH_STATE = 'login';
    }
  }
}
