import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
})
export class EmployeeFormComponent {
  constructor(private builder: FormBuilder) {}

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
