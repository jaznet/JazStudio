import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['guest', Validators.required],
      password: ['1234', Validators.required]
    });
  }

  login() {
   
    if (this.loginForm.valid) {
      var username = this.loginForm.value.username;
      var password = this.loginForm.value.password;
       username = 'guest';
       password = 'login';
      // Implement your login logic here
      console.log('Username:', username);
      console.log('Password:', password);
    }
  }
}
