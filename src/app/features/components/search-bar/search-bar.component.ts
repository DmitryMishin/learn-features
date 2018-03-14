import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fd-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.styl']
})
export class SearchBarComponent {
  @Input() query: string = '';
  @Output() queryChange = new EventEmitter<string>();

  constructor() { }

  public onInput() {
    this.queryChange.emit(this.query);
  }
}
