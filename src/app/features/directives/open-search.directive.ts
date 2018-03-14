import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[fdOpenSearch]'
})
export class OpenSearchDirective implements OnInit {
  private isOpen: boolean;

  @Input() normalWidth = 200;
  @Input() focusWidth = 300;

  @HostListener('click', ['$event']) onFocus = () => {
    if (this.isOpen) {
      return;
    }

    this.isOpen = true;

    this.element.nativeElement.style.width = this.focusWidth + 'px';

    setTimeout(() => {
      const onClick = (event) => {
        if (!event.target.closest(this.element.nativeElement.tagName)) {
          this.isOpen = false;
          this.element.nativeElement.style.width = this.normalWidth + 'px';
          document.removeEventListener('click', onClick);
        }
      };

      document.addEventListener('click', onClick);
    });
  };

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.element.nativeElement.style.width = this.normalWidth + 'px';
    this.element.nativeElement.style.transition = 'width .2s ease-in-out';
  }
}
