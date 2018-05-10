import { Component, OnInit } from '@angular/core';
import { UserService } from './../shared/services/user.service';
import { Router } from '@angular/router';
import { ErrorHandlerService } from './../shared/services/error-handler.service';

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
  	private router: Router,
    private errorService: ErrorHandlerService
  ) { }

  ngOnInit() {
  }

  doLogin() {
  	console.log('Credentials: ', this.data);
  	this.userService.login(this.data)
  		.then(response => {
  			console.log('Will get permissions!', response);
         return this.userService.getPermissions();
  		})
      .then(response => {
        console.log('Permissions: ', response);
        this.router.navigate(['/']);
      })
  		.catch(error => {
  			console.log('Error', error.json());
  			this.error = error.json().message;
        this.errorService.handle(error);
  		});
  }

}
