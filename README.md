# AngularMaterial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Install material
`ng add @angular/material`

## Create module/component
` ng g m sidebar`
` ng g c sidebar`

## Generate module with routing
`ng g m dashboard --rounting ` 

## Add routing in app-routing.module
```
const routes: Routes = [
  {
    path: '',
    redirectTo: 'page',
    pathMatch: 'full',
  },
  {
    path: 'page',
    loadChildren: () => import('./page/page.module').then(m => m.PageModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
]
```

## Add routing in module
```
const routes: Routes = [
  {
    path: '',
    component: PageComponent,
  }
];
```

### Dropdown search input
Create `dropdown-search` feature module which will export `DropdownSearch component` that can be used in other components
```

import { DropdownSearchComponent } from './dropdown-search.component';
import { FilterSearchPipe } from './pipes/filter-search.pipe';
...

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
```

### DropdownSearch component

On blur event we are using setTimeout and to prevent change detection cycle again need to run it outside of angular.
```
import { Component, OnInit, Input, OnDestroy, Output, EventEmitter, NgZone } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Subject } from 'rxjs';

interface SelectItem {
  id: number | string;
  name?: string;
  label?: string;
}

@Component({
  selector: 'app-dropdown-search',
  templateUrl: './dropdown-search.component.html'
})
export class DropdownSearchComponent implements OnInit, OnDestroy {
  @Input() placeholder;
  @Input() label;
  @Input() group: FormGroup;
  @Input() controlName: string;

  @Input() list: Array<SelectItem> = [];
  @Input() optionLabel: 'name' | 'label' = 'name';
  @Output() itemSelected = new EventEmitter<string>();

  destroy$ = new Subject<void>();
  isOpen = false;
  selectedValue: SelectItem;
  searchValue = '';

  constructor(private zone: NgZone) {}

  ngOnInit() {}

  selectItem(value: string) {
    this.group.get(this.controlName).setValue(value);
    this.itemSelected.emit(value);
  }

  resetFilter(searchInput: any) {
    // run outside of angular to prevent change detection
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        searchInput.value = '';
      }, 100);
    });
  }

    // when mat-select is opened it start to search and scroll mat-options on key down
    preventMatSelectScroll($event) {
      $event.stopImmediatePropagation();
    }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

```

View
We are using `ngModel` inside reactive forms so we need to use `{ standalone: true }` option
```
<mat-form-field [floatLabel]="'never'">
  <mat-select
    [placeholder]="placeholder"
    [ngModel]="group.get(controlName).value"
    (ngModelChange)="selectItem($event)"
    [ngModelOptions]="{ standalone: true }"
  >
    <div style="padding: 3px 4px">
      <mat-form-field style="width: 100%" floatLabel="never">
        <input
          matInput
          placeholder="Search"
          autocomplete="off"
          #searchInput
          (keydown)="preventMatSelectScroll($event)"
          (blur)="resetFilter(searchInput)"
        />
        <button mat-button *ngIf="searchInput.value" matSuffix mat-icon-button aria-label="Clear" (click)="searchInput.value = ''">
          <mat-icon>close</mat-icon>
        </button>
      </mat-form-field>
    </div>
    <mat-option value="">Not Selected</mat-option>
    <mat-option [value]="item.id" *ngFor="let item of list | filterSearch: searchInput.value:optionLabel">
      {{ item[optionLabel] }}
    </mat-option>
  </mat-select>
  <mat-hint>{{ label }}</mat-hint>
</mat-form-field>

```

Usage
```
<app-dropdown-search
      placeholder="Enter value to search"
      label="Select from list"
      [group]="applyForm"
      controlName="search"
      [list]="searchList"
      *ngIf="applyForm.get('search')"
      (itemSelected)="dropdownItemChanged($event)"
></app-dropdown-search>
```
