import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyFormComponent } from './apply-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [ApplyFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [ApplyFormComponent]
})
export class ApplyFormModule { }
