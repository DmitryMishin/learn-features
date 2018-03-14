import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FeatureModel } from "../../models/feature.model";

@Component({
  selector: 'fd-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.styl']
})
export class FeatureItemComponent {
  @Input() feature;
  @Output() remove: EventEmitter<FeatureModel> = new EventEmitter();

  onRemove() {
    this.remove.emit(this.feature);
  }
}
