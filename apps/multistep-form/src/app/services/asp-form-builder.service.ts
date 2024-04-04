import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AspFormBuilderService {
  AspForm!: FormGroup;

  constructor(private builder: FormBuilder) {
    this.AspForm = this.builder.group({
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
        present_address: this.builder.group({
          street_address: this.builder.control('', Validators.required),
          city: this.builder.control('', Validators.required),
          region: this.builder.control('', Validators.required),
          zip_code: this.builder.control('', Validators.required),
          country: this.builder.control('', Validators.required),
        }),
        permanent_address: this.builder.group({
          street_address: this.builder.control('', Validators.required),
          city: this.builder.control('', Validators.required),
          region: this.builder.control('', Validators.required),
          zip_code: this.builder.control('', Validators.required),
          country: this.builder.control('', Validators.required),
        }),
      }),
      BusinessInfoForm: this.builder.group({
        ownership_category: this.builder.control('', Validators.required),
        name_of_organization: this.builder.control('', Validators.required),
        business_type: this.builder.control('', Validators.required),
        organization_address: this.builder.group({
          street_address: this.builder.control('', Validators.required),
          city: this.builder.control('', Validators.required),
          region: this.builder.control('', Validators.required),
          zip_code: this.builder.control('', Validators.required),
          country: this.builder.control('', Validators.required),
        }),
        head_office_address: this.builder.group({
          street_address: this.builder.control('', Validators.required),
          city: this.builder.control('', Validators.required),
          region: this.builder.control('', Validators.required),
          zip_code: this.builder.control('', Validators.required),
          country: this.builder.control('', Validators.required),
        }),
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
        trade_license_file: this.builder.control('', Validators.required),
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
        present_address: this.builder.group({
          street_address: this.builder.control('', Validators.required),
          city: this.builder.control('', Validators.required),
          region: this.builder.control('', Validators.required),
          zip_code: this.builder.control('', Validators.required),
          country: this.builder.control('', Validators.required),
        }),
        permanent_address: this.builder.group({
          street_address: this.builder.control('', Validators.required),
          city: this.builder.control('', Validators.required),
          region: this.builder.control('', Validators.required),
          zip_code: this.builder.control('', Validators.required),
          country: this.builder.control('', Validators.required),
        }),
      }),
    });
  }

  get AspFormGroup() {
    return this.AspForm;
  }

  get BasicInfoFormGroup() {
    return this.AspForm.get('BasicInfoForm') as FormGroup;
  }

  get BusinessInfoFormGroup() {
    return this.AspForm.get('BusinessInfoForm') as FormGroup;
  }
  get PartnerInfoFormGroup() {
    return this.AspForm.get('PartnerInfoForm') as FormGroup;
  }
}
