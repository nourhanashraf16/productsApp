import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm : FormGroup;
  constructor(){
    this.registerForm = new FormGroup({
      Name:new FormControl("",Validators.required),
      userEmail :new FormControl("" ,[Validators.required ,Validators.email]),
      UserName :new FormControl("",[Validators.required ,Validators.pattern("[a-zA-Z]+")]),
      password :new FormControl("",[Validators.required ,Validators.minLength(8),Validators.pattern(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@*%$#])[a-zA-Z\\d@*%$#]+$"
      ),]),
      confirmPassword :new FormControl("",[Validators.required ])
    })
  }
  handleRegisterForm(){
    console.log( this.registerForm)
  }

}
