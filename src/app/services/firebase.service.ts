import { Injectable } from '@angular/core';
import * as firebaseauth from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  IsLoggedIn = false

  constructor(public firebaseAuth : AngularFireAuth){
  }
  
  async signin(email:string,password:string)
  {
  await this.firebaseAuth.signInWithEmailAndPassword(email,password)
  .then(res=>{
  this.IsLoggedIn = true
  localStorage.setItem('user',JSON.stringify(res.user));
  
  });
  
  
  }
  
  async signup(email:string,password:string)
  {
  await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
  .then(res=>{
  this.IsLoggedIn = true
  localStorage.setItem('user',JSON.stringify(res.user));
  
  });
  
  
  }
  
  logout()
  {
  this.firebaseAuth.signOut();
  localStorage.removeItem('user');
  
  } 
  
}
