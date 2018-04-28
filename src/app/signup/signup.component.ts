import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from './../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterViewInit {
  @ViewChild('myForm') myForm: ElementRef;
  public error:string;
  public data:any = {};
  constructor(
  	private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    console.log(this.myForm);
  }

  addUser() {
    if(this.myForm.nativeElement.className.includes('ng-invalid')) {
      console.log('Invalid Form');
      return false;
    } else {
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
  }

}
