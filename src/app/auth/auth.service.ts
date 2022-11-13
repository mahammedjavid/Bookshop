import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm, RegisterForm } from '../Type/Type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   isLoading:boolean = false;
   isAuthenticated:boolean = false

  constructor(private routerService:Router) { }


  // Login
  login(form:LoginForm){

    if(this.isLoading) return
    this.isLoading = true

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
      alert("Login success")
      this.isAuthenticated = true
      this.routerService.navigate([''])
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Credential does not match our record')
      this.isAuthenticated = false
      })
      .finally(()=>this.isLoading=false)
  }


  // Register 
  passwordMatched = true;
  register(form:RegisterForm){
      if(this.isLoading) return 
      this.isLoading = true

    if(form.password !== form.confirmPassword){
      this.passwordMatched = false
      return
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true
        this.routerService.navigate([''])
      // // Signed in 
      // const user = userCredential.user;   we dont need to sign
      // // ...
      alert("your Profile is created")
      // console.log(userCredential)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message
      this.isAuthenticated = false
      // ..
    })
    .finally(()=>this.isLoading=false)
  }

  //logOut

  logOut(){
    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
    this.routerService.navigate(['login'])
    this.isAuthenticated=false
    }).catch((error) => {
    // An error happened.
    });
  }
}
