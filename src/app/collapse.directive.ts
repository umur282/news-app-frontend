import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleCollapse() {
    const buttonClassList = this.elRef.nativeElement.classList.value.split(' ');
    const divElement: HTMLDivElement = <HTMLDivElement> document.getElementById('navbarSupportedContent');
    const divClassList = divElement.classList;

    if (buttonClassList[buttonClassList.length - 1] === 'collapsed') {
      this.renderer.removeClass(this.elRef.nativeElement, 'collapsed');
    } else {
      this.renderer.addClass(this.elRef.nativeElement, 'collapsed');
    }

    if (divClassList[divClassList.length - 1] === 'show') {
      divElement.classList.remove('show');
    } else {
      divElement.classList.add('show');
    }
  }

}
