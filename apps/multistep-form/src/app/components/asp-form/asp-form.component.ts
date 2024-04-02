import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatStepperModule } from "@angular/material/stepper"
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button"

import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormTermsComponent } from './parts/form-terms/form-terms.component';
import { BasicInfoFormComponent } from './parts/basic-info-form/basic-info-form.component';
import { BusinessInfoFormComponent } from './parts/business-info-form/business-info-form.component';
import { FormPreviewComponent } from './parts/form-preview/form-preview.component';
import { PartnerInfoFormComponent } from './parts/partner-info-form/partner-info-form.component';

@Component({
  selector: 'app-asp-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormTermsComponent,
    BasicInfoFormComponent,
    BusinessInfoFormComponent,
    FormPreviewComponent,
    PartnerInfoFormComponent,
  ],
  templateUrl: './asp-form.component.html',
  styleUrl: './asp-form.component.scss',
  animations: [],
})
export class AspFormComponent {
  constructor(private builder: FormBuilder) {}
  isLinear = true;

  AddressForm = this.builder.group({
    street_address: this.builder.control('', Validators.required),
    city: this.builder.control('', Validators.required),
    region: this.builder.control('', Validators.required),
    zip_code: this.builder.control('', Validators.required),
    country: this.builder.control('', Validators.required),
  });

  AspForm = this.builder.group({
    acceptTerms: this.builder.control('', Validators.required),
    BasicInfoForm: this.builder.group({
      name: this.builder.control('', Validators.required),
      father_name: this.builder.control('', Validators.required),
      mother_name: this.builder.control('', Validators.required),
      spouse_name: this.builder.control('', Validators.required),
      phone: this.builder.control('', Validators.required),
      email: this.builder.control('', Validators.required),
      gender: this.builder.control('', Validators.required),
      nationality: this.builder.control('', Validators.required),
      dob: this.builder.control('', Validators.required),
      id_no: this.builder.control('', Validators.required),
      passport_no: this.builder.control('', Validators.required),
      expire_date: this.builder.control('', Validators.required),
      present_address: this.AddressForm,
      permanent_address: this.AddressForm,
    }),
    BusinessInfoForm: this.builder.group({
      ownership_category: this.builder.control('', Validators.required),
      name_of_organization: this.builder.control('', Validators.required),
      business_type: this.builder.control('', Validators.required),
      organization_address: this.AddressForm,
      head_office_address: this.AddressForm,
      geo_location: this.builder.control('', Validators.required),
      business_merchant_category_code: this.builder.control(
        '',
        Validators.required
      ),
      tin_number: this.builder.control('', Validators.required),
      tin_certificate_file: this.builder.control('', Validators.required),
      vat_bin_number: this.builder.control('', Validators.required),
      vat_file: this.builder.control('', Validators.required),
      tax_return_file: this.builder.control('', Validators.required),
      trade_license_file: this.AddressForm,
    }),
    PartnerInfoForm: this.builder.group({
      name: this.builder.control('', Validators.required),
      father_name: this.builder.control('', Validators.required),
      mother_name: this.builder.control('', Validators.required),
      spouse_name: this.builder.control('', Validators.required),
      phone: this.builder.control('', Validators.required),
      email: this.builder.control('', Validators.required),
      gender: this.builder.control('', Validators.required),
      nationality: this.builder.control('', Validators.required),
      dob: this.builder.control('', Validators.required),
      id_no: this.builder.control('', Validators.required),
      passport_no: this.builder.control('', Validators.required),
      expire_date: this.builder.control('', Validators.required),
      present_address: this.AddressForm,
      permanent_address: this.AddressForm,
    }),
  });

  get BasicInfoForm() {
    return this.AspForm.get('BasicInfoForm') as FormGroup;
  }

  get AcceptControl() {
    return this.AspForm.get('acceptTerms') as FormControl;
  }

  handleSubmit() {
    if (this.AspForm.valid) {
      console.log(this.AspForm.value);
      alert(JSON.stringify(this.AspForm.value));
      this.AspForm.reset();
    }

    console.log('submitted', this.AspForm);
  }
}
