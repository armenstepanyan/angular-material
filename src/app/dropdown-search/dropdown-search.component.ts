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
