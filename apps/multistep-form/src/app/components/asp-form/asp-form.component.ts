import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormTermsComponent } from './parts/form-terms/form-terms.component';
import { BasicInfoFormComponent } from './parts/basic-info-form/basic-info-form.component';
import { BusinessInfoFormComponent } from './parts/business-info-form/business-info-form.component';
import { FormPreviewComponent } from './parts/form-preview/form-preview.component';
import { PartnerInfoFormComponent } from './parts/partner-info-form/partner-info-form.component';
import { AspFormBuilderService } from '../../services/asp-form-builder.service';

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
    FormPreviewComponent,

  ],
  templateUrl: './asp-form.component.html',
  styleUrl: './asp-form.component.scss',
  animations: [],
})
export class AspFormComponent implements OnInit {
  constructor(private builderService: AspFormBuilderService) {}
  isLinear = true;


  AspForm!: FormGroup;

  ngOnInit(): void {
    this.AspForm = this.builderService.AspFormGroup;
  }

  get AcceptControl() {
    return this.AspForm.get('acceptTerms') as FormControl;
  }

  get BasicInfoForm() {
    return this.AspForm.get('BasicInfoForm') as FormGroup;
  }

  get BusinessInfoForm() {
    return this.AspForm.get('BusinessInfoForm') as FormGroup;
  }

  get PartnerInfoForm() {
    return this.AspForm.get('PartnerInfoForm') as FormGroup;
  }

  handleSubmit() {
    if (this.AspForm.valid) {
      console.log(this.AspForm.value);
    }

    console.log('submitted', this.AspForm);
  }
}
