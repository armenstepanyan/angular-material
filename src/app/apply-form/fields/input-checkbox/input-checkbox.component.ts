import { Component, OnInit, Input } from '@angular/core';
import { CheckboxItem } from '@app/apply-form/checkbox-item.interface';
import { FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material';


@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss']
})
export class InputCheckboxComponent implements OnInit {
  @Input() list: Array<CheckboxItem>;
  @Input() group: FormGroup;
  @Input() controlName: string;
  @Input() isRequired: boolean;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
    this.setFormControlValue();
  }

  onChange($event: MatCheckboxChange, index: number) {
    this.list = this.list.reduce((acc, current, i) => {
      if (i === index) {
        const item = { ...current, checked: $event.checked };
        acc.push(item);
      } else {
        acc.push({ ...current });
      }
      return acc;
    }, []);

    this.setFormControlValue();
    this.group.get(this.controlName).markAllAsTouched();
  }

  setFormControlValue() {
    const selectedValues = [];
    this.list.map(item => {
      if (item.checked) {
        selectedValues.push(item.label);
      }
    });
    if (this.isRequired && selectedValues.length === 0) {
      this.group.get(this.controlName).setErrors({ required: true });
    } else {
      this.group.get(this.controlName).setErrors(null);
    }

    this.group.get(this.controlName).setValue(selectedValues);
  }

}
