import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSearchComponent } from './dropdown-search.component';
import { FilterSearchPipe } from './pipes/filter-search.pipe';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [DropdownSearchComponent, FilterSearchPipe],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [DropdownSearchComponent]
})
export class DropdownSearchModule { }
