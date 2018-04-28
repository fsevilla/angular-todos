import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorHandlerService {

  private messages:any = {
  	invalid_credentials: 'Wrong username or password',
  	invalid_request: 'Review your data and try again'
  }

  constructor(
  	private toastr: ToastrService
  ) { }

  handle(error) {
  	console.log(error.json());
  	this.toastr.error(error.json().message);
  }

}
