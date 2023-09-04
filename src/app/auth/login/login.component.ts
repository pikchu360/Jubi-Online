import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 
  loginForm=this.formBuilder.group({
    email:['', Validators.required, Validators.email],
    pass: ['', Validators.required],
  })

  constructor(private formBuilder:FormBuilder, private router:Router) {

  }

  ngOnInit(): void {
    
  }

  get email() { return this.loginForm.controls.email; }

  get pass() { return this.loginForm.controls.pass; }

  login(){
    if(this.loginForm.valid){
      this.router.navigateByUrl('/inicio');
      this.loginForm.reset();
    }
    else{
      //alert("Ingrese valores");
      this.loginForm.markAllAsTouched();
    }
  }
}
