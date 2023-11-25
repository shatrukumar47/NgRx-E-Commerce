import { Component } from '@angular/core';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { loginRequest } from '../../store/auth/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = "eve.holt@reqres.in";
  password: string = "";

  constructor(private store: Store<AppState>){}
  
  onSubmit(){
    if(this.email && this.password){
      let props = {
        email: this.email,
        password: this.password
      }
      this.store.dispatch(loginRequest(props))
    }
  }

}
