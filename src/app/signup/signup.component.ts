import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from './../shared/services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterViewInit {
  
  // @ViewChild('myForm') myForm: ElementRef;
  public signupForm: FormGroup;
  public error:string;
  public data:any = {};
  public errorMessages: any = {};
  constructor(
  	private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{6,}')]]
    });
  }

  ngAfterViewInit() {
    // console.log(this.myForm);
  }

  addUser() {
    console.log('Form: ', this.signupForm);
     if(!this.signupForm.valid){
       this.showMessages();
       return;
     }

     	this.userService.register(this.data)
  		.then(response => {
  			console.log('Usuario creado: ', response);
  			this.error = '';
        this.router.navigate(['/login']);
  		})
  		.catch(error => {
  			console.error('Failed: ', error.json());
  			this.error = error.json().error;
  		});
  }

  hasError(controlName, error, force = false) {
    let control = this.signupForm.controls[controlName];

    try {
      return control.errors[error] && (control.dirty || force);
    } catch (e) {
      return false;
    }
  }

  showMessages() {
    for(var k in this.signupForm.controls) {
      if(this.signupForm.controls.hasOwnProperty(k)) {
        this.errorMessages[k] = this.hasError(k, 'required', true);        
      }
    }
  }
}