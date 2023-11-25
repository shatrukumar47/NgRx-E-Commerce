import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initFlowbite } from 'flowbite';
import { AppState } from './store/app.state';
import { LocalStorageService } from './service/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'NgRx';
  isAuth: boolean = false
  constructor(private store: Store<AppState>, private router: Router, private localStorageService: LocalStorageService){}

  ngOnInit(): void {
    initFlowbite();
    this.store.select((state)=> state.auth.token).subscribe((token)=>{
      if(token){
        this.isAuth = true;
      }
    })
  }

  handleLogout(){
    this.isAuth = false;
    this.localStorageService.remoteItem("token");
    this.router.navigate(["/"])
  }
}
