import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';

import { MatTabsModule } from '@angular/material';

import { SidebarModule } from '@app/sidebar/sidebar.module';
import { ApplyFormModule } from '@app/apply-form/apply-form.module';
import { TableModule } from '@app/table/table.module';

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    SidebarModule,
    ApplyFormModule,
    TableModule,
    MatTabsModule
  ]
})
export class PageModule { }
