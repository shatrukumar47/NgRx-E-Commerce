import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  authValue: any = false;
  private isAuthenticated = new BehaviorSubject<boolean>(this.authValue);

  private apiLogin = "https://reqres.in/api/login";
  constructor(private http: HttpClient, private router: Router, private localStorageService: LocalStorageService) { }


  login(email:string, password: string){
    return this.http.post<any>(this.apiLogin, {email, password})
  }
}