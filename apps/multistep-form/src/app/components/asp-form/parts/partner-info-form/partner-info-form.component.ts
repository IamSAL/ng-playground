import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button'
import { AddressFormComponent } from "../address-form/address-form.component";
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
        AddressFormComponent
    ]
})
export class PartnerInfoFormComponent {
  @Input() formParent: FormGroup;
  constructor(private builder: FormBuilder) {
    this.formParent = this.builder.group({});
  }
}
