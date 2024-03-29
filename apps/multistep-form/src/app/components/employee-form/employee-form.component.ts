import { Component } from '@angular/core';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatStepperModule } from "@angular/material/stepper"
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button"


@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
  animations:[]
})
export class EmployeeFormComponent {
  constructor(private builder: FormBuilder) {}
  isLinear = false;
  Empregister = this.builder.group({
    basic: this.builder.group({
      firstname: this.builder.control('', Validators.required),
      lastname: this.builder.control('', Validators.required),
    }),
    contact: this.builder.group({
      email: this.builder.control('', Validators.required),
      phone: this.builder.control('', Validators.required),
      fax: this.builder.control('', Validators.required),
    }),
    address: this.builder.group({
      street: this.builder.control('', Validators.required),
      city: this.builder.control('', Validators.required),
    }),
  });
}
