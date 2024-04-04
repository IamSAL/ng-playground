import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { BasicInfoFormComponent } from '../basic-info-form/basic-info-form.component';
import { AddressFormComponent } from '../address-form/address-form.component';
import { AspFormBuilderService } from '../../../../services/asp-form-builder.service';

@Component({
  selector: 'app-business-info-form',
  standalone: true,
  templateUrl: './business-info-form.component.html',
  styleUrl: './business-info-form.component.css',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCheckbox,
    MatInput,
    MatFormField,
    MatLabel,
    BasicInfoFormComponent,
    AddressFormComponent,
  ],
})
export class BusinessInfoFormComponent implements OnInit {
  formParent!: FormGroup;
  constructor(private formBuilderService: AspFormBuilderService) {}
  ngOnInit(): void {
    this.formParent = this.formBuilderService.BusinessInfoFormGroup;
  }

  get OrganizationAddressForm() {
    return this.formParent.get('organization_address') as FormGroup;
  }
  get HeadOfficeAddressForm() {
    return this.formParent.get('head_office_address') as FormGroup;
  }
}
