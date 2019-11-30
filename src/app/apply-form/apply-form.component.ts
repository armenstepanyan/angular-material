import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CheckboxItem } from '@app/apply-form/checkbox-item.interface';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.scss']
})
export class ApplyFormComponent implements OnInit {

  applyForm: FormGroup;
  values: Array<CheckboxItem> = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.values = [
      { label: 'HTML', checked: true },
      { label: 'CSS', checked: false },
      { label: 'JAVASCRIPT', checked: false },
      { label: 'PHP', checked: false },
    ];

    this.applyForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      checkbox: [null, [Validators.required]],
      message: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.applyForm.valid) {
      console.log(this.applyForm.value);
    } else {
     this.applyForm.markAsTouched();
    }

  }

}
