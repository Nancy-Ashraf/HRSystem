import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn=false;

  constructor(private authservice:AuthenticationService,private router:Router){}
  ngOnInit(): void {
    this.authservice.isLoggedIn$.subscribe((isLoggedIn)=>{
      this.isLoggedIn=isLoggedIn;
      
    })
  }
  logOut(){
    localStorage.removeItem('token');
    this.isLoggedIn=false;
  }

}
