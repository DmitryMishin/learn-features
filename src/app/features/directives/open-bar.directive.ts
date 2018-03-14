import { Directive, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fdOpenBar]'
})
export class OpenBarDirective implements OnInit {
  private isOpen = false;

  @Input() startWidth = '200px';
  @Input() endWidth = '300px';

  constructor(private renderer: Renderer2) {
  }

  @HostListener('click') onClick = () => {
      if (this.isOpen) {
        return;
      }

      this.isOpen = true;

      this.width = this.endWidth;

      const removeListen = this.renderer.listen('document', 'click', (event) => {
        if (!event.target.closest('fd-search-bar')) {
          this.isOpen = false;

          this.width = this.startWidth;
          removeListen();
        }
      });
  };

  @HostBinding('style.transition') transition = 'width 0.2s ease-in-out';
  @HostBinding('style.width') width = this.startWidth;

  ngOnInit() {
    this.width = this.startWidth;
  }
}
