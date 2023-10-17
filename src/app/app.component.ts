import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './Authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'HRSystem';
  constructor(private authService: AuthenticationService) {}
  ngOnInit(): void {
    if (localStorage.getItem('token')) this.authService.isLoggedIn$.next(true);
  }
}
