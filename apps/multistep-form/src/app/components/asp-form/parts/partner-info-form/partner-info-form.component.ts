import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, FormGroupDirective, ReactiveFormsModule} from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button'
import { AddressFormComponent } from "../address-form/address-form.component";
import { AspFormBuilderService } from '../../../../services/asp-form-builder.service';
@Component({
  selector: 'app-partner-info-form',
  standalone: true,
  templateUrl: './partner-info-form.component.html',
  styleUrl: './partner-info-form.component.css',
  imports: [
    CommonModule,
    MatCheckbox,
    MatInput,
    MatFormField,
    MatLabel,
    MatButtonModule,
    ReactiveFormsModule,
    AddressFormComponent,
  ],
})
export class PartnerInfoFormComponent implements OnInit {
  formParent!: FormGroup;
  constructor(private formBuilderService: AspFormBuilderService) {}
  ngOnInit(): void {
    this.formParent = this.formBuilderService.PartnerInfoFormGroup;
  }
  get PresentAddressForm() {
    return this.formParent.get('present_address') as FormGroup;
  }
  get PermanentAddressForm() {
    return this.formParent.get('permanent_address') as FormGroup;
  }
}
