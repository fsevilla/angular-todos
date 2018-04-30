import { Directive, Input, Output, EventEmitter, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[status]'
})

export class TodoStatusDirective implements AfterViewInit {
  
  @Input() status;
  @Output() onStatusColored = new EventEmitter<string>();
  
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
  	switch (this.status) {
  		case 1:
  			this.addClassName('new');
  			break;
		case 2:
			this.addClassName('in-progress');
			break;
		case 3:
			this.addClassName('done');
			break;
  		default:
  			this.addClassName('new');
  			break;
  	 }
  }

  addClassName(className) {
  	this.elementRef.nativeElement.className = className;
  	this.onStatusColored.emit(className);
  }
}
