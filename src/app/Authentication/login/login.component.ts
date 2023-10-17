import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm:FormGroup;
  constructor(private authService:AuthenticationService, private router:Router,private snackBar: MatSnackBar){
    this.loginForm=new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
    })
  }
  
 
  loginProcess() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).pipe(
        catchError((error) => {
          if (error.status === 401) {
            this.snackBar.open('Unauthorized access!', 'Close', {
              duration: 3000 
            });
          }
          return throwError(error);
        })
      ).subscribe(tokenObject => {
        this.router.navigateByUrl('');
      });
    }


}
}
