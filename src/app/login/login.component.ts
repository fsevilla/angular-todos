import { Component, OnInit } from '@angular/core';
import { UserService } from './../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public data:any = {};
  public error:string;
  constructor(
  	private userService: UserService,
  	private router: Router
  ) { }

  ngOnInit() {
  }

  doLogin() {
  	console.log('Credentials: ', this.data);
  	this.userService.login(this.data)
  		.then(response => {
  			console.log('Success!', response);
  			this.router.navigate(['/todos']);
  		})
  		.catch(error => {
  			console.log('Error', error.json());
  			this.error = error.json().message;
  		});
  }

}
