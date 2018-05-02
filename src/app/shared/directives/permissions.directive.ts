import { Directive, AfterViewInit, ElementRef, Input } from '@angular/core';
import { UserService } from './../services/user.service';

@Directive({
  selector: '[permissions]'
})
export class PermissionsDirective implements AfterViewInit {

  @Input() permissions: any;
  constructor(
    private userService: UserService,
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.style.display = 'none';
    if(this.userService.hasPermissions(this.permissions.resource, [this.permissions.action])) {
      this.elementRef.nativeElement.style.display = 'inherit';
    } else {
      this.elementRef.nativeElement.remove();
    }
  }

}
