import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/Type/Type';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:LoginForm ={
    email : "",
    password  :  ""
  }

  constructor(private authService:AuthService) { }

  
  ngOnInit(): void {
  }

  onLoginSubmit(){
    this.authService.login(this.loginForm)
  }

  isLoading(){
    return this.authService.isLoading;
  }




}
