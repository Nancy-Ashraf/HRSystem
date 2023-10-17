import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LogindDto } from './Dtos/LoginDto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public isLoggedIn$ = new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient) {}

  


  login(credintial:LogindDto){
   
    return this.http.post(environment.paseApi+'login',credintial).pipe(
      tap((tokenDto:any)=>{
        this.isLoggedIn$.next(true);
        localStorage.setItem('token',tokenDto.access_token);
      })
    )    
  }

}
