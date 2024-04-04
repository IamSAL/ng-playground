import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { AspFormBuilderService } from '../../../../services/asp-form-builder.service';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckbox,
    MatInput,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
  ],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
})
export class AddressFormComponent  {
  @Input() formParent!: FormGroup;

}
