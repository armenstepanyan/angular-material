import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatSortModule, MatTableModule, MatIconModule, MatMenuModule, MatPaginatorModule } from '@angular/material';



@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule
  ],
  exports: [TableComponent]
})
export class TableModule { }
