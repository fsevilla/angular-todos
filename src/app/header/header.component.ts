import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn:boolean;
  constructor(
  	private authService: AuthService,
  	private router: Router
  ) { }

  ngOnInit() {
  	this.authService.loginStatus.subscribe(status => {
  		this.isLoggedIn = status;
  	});
  	this.authService.loginStatus.next(this.authService.isLoggedIn());
  }

  logout() {
  	this.authService.logout();
  	this.router.navigate(['/login']);
  }

}
