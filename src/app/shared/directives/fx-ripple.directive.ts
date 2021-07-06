import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ui-ripple]',
})
export class FxRippleDirective {
  constructor(private _elemRef: ElementRef) {
    this.ripple = this.addElement();
    this.resetElement();
  }

  ripple = null;

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.resetElement();
    const el = this._elemRef.nativeElement;

    const posx = event.offsetX;
    const posy = event.offsetY;
    const width = el.offsetWidth;
    const height = el.offsetHeight;
    this.viewRipple({ posx, posy, width, height });
  }

  viewRipple({ posx, posy, width, height }) {
    const size = Math.sqrt(width * width + height * height);
    const ripple = this.ripple;

    ripple.style.width = '0px';
    ripple.style.height = '0px';

    ripple.style.width = size * 2 + 'px';
    ripple.style.height = size * 2 + 'px';
    ripple.style.left = posx + 'px';
    ripple.style.top = posy + 'px';
    ripple.className = 'ripple active';
  }

  resetElement() {
    this.ripple.className = 'ripple';
    this.ripple.style.width = '0px';
    this.ripple.style.height = '0px';
  }

  addElement() {
    const ripple = document.createElement('div');

    this._elemRef.nativeElement.appendChild(ripple);
    this._elemRef.nativeElement.style.overflow = 'hidden';
    this._elemRef.nativeElement.style.position = 'relative';

    return ripple;
  }
}
