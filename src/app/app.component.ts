import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from './Models/user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userObj:User={username:"",dob:"",email:""};
  addUserData(){
    console.log(this.userObj)
    this.userObj={username:"",dob:"",email:""}
  }
  
}