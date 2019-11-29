import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.scss']
})
export class ApplyFormComponent implements OnInit {

  applyForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.applyForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
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
