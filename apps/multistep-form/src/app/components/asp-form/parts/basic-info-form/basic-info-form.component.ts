import { Component, Input, ViewEncapsulation } from '@angular/core';

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
import { AddressFormComponent } from "../address-form/address-form.component";


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
        AddressFormComponent
  ],
})
export class BasicInfoFormComponent {
  @Input() formParent: FormGroup;
  constructor(private builder: FormBuilder) {
    this.formParent=this.builder.group({})
  }
}
