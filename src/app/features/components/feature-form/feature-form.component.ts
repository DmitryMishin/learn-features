import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FeatureModel } from '../../models/feature.model';

@Component({
  selector: 'fd-feature-form',
  templateUrl: './feature-form.component.html',
  styleUrls: ['./feature-form.component.styl']
})
export class FeatureFormComponent implements OnInit {
  @Input() model: FormGroup = this.fb.group({
    title: '',
    description: ''
  });
  @Output() onSubmit = new EventEmitter<{ form: AbstractControl, value: FeatureModel }>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  get titleControl() {
    return this.model.controls.title as FormControl;
  }

  get descriptionControl() {
    return this.model.controls.description as FormControl;
  }

  submit() {
    this.onSubmit.emit({ form: this.model, value: this.model.value });
  }
}
