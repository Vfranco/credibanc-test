import { Directive, Output, EventEmitter, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[clickOutSide]'
})
export class ClickOutSideDirective {

  @Output() clickOutSide = new EventEmitter<MouseEvent>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, target: HTMLElement): void {
    if (!target)
      return;

    const clickInside = this.elementRef.nativeElement.contains(target);

    if (!clickInside)
      this.clickOutSide.emit(event);
  }
}
