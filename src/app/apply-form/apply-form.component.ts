import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CheckboxItem } from '@app/apply-form/checkbox-item.interface';

@Component({
  selector: "app-apply-form",
  templateUrl: "./apply-form.component.html",
  styleUrls: ["./apply-form.component.scss"],
})
export class ApplyFormComponent implements OnInit {
  applyForm: FormGroup;
  values: Array<CheckboxItem> = [];
  searchList = [
    { id: 1, name: "Leanne Graham", label: "Leanne Graham" },
    { id: 2, name: "Ervin Howell", label: "Ervin Howell" },
    { id: 3, name: "Clementine Bauch", label: "Clementine Bauch" },
    { id: 4, name: "Patricia Lebsack", label: "Patricia Lebsack" },
    { id: 5, name: "Chelsey Dietrich", label: "Chelsey Dietrich" },
    { id: 6, name: "Mrs. Dennis Schulist", label: "Mrs. Dennis Schulist" },
    { id: 7, name: "Kurtis Weissnat", label: "Kurtis Weissnat" },
    { id: 8, name: "Nicholas Runolfsdottir",   label: "Nicholas Runolfsdottir" },
    { id: 9, name: "Glenna Reichert", label: "Glenna Reichert" },
    { id: 10, name: "Clementina DuBuque", label: "Clementina DuBuque" },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.values = [
      { label: "HTML", checked: true },
      { label: "CSS", checked: false },
      { label: "JAVASCRIPT", checked: false },
      { label: "PHP", checked: false },
    ];

    this.applyForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      checkbox: [null, [Validators.required]],
      radio: [null, [Validators.required]],
      message: [null, Validators.required],
      search: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.applyForm.valid) {
      console.log(this.applyForm.value);
    } else {
      this.applyForm.markAsTouched();
    }
  }

  dropdownItemChanged($event) {
    console.log($event);
  }
}
