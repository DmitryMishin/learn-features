import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeaturesService } from '../../services/features.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fd-add-feature',
  templateUrl: './add-feature.component.html',
  styleUrls: ['./add-feature.component.styl']
})
export class AddFeatureComponent {
  public feature: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
    description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]]
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private featuresService: FeaturesService) {
  }

  submit({ form, value }) {
    for (let name in form.controls) {
      form.get(name).markAsTouched();
      form.get(name).updateValueAndValidity();
    }

    if (form.valid) {
      this.featuresService.createFeature(value).subscribe((response) => {
        this.router.navigate(['/features']);
      })
    }
  }
}
