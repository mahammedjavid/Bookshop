import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/Type/Type';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:RegisterForm = {
    email : "",
    password : "",
    confirmPassword : ""
  }
  passwordMatched = true;

  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }

  onRegisterSubmit(){
    this.authservice.register(this.registerForm)
  }

    isLoading(){
    return this.authservice.isLoading;
  }
}
