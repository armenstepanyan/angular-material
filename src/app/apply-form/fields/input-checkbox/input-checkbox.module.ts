import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCheckboxComponent } from './input-checkbox.component';

import { MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputCheckboxComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  exports: [InputCheckboxComponent]
})
export class InputCheckboxModule { }
