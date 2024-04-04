import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddressFormComponent } from "../address-form/address-form.component";
import { AspFormBuilderService } from '../../../../services/asp-form-builder.service';



@Component({
  selector: 'app-basic-info-form',
  standalone: true,
  templateUrl: './basic-info-form.component.html',
  styleUrl: './basic-info-form.component.css',
  imports: [
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    AddressFormComponent,
  ],
})
export class BasicInfoFormComponent implements OnInit {
  formParent!: FormGroup;
  constructor(private formBuilderService: AspFormBuilderService) {}
  ngOnInit(): void {
    this.formParent = this.formBuilderService.BasicInfoFormGroup;
  }
  get PresentAddressForm() {
    return this.formParent.get('present_address') as FormGroup;
  }
  get PermanentAddressForm() {
    return this.formParent.get('permanent_address') as FormGroup;
  }
}
