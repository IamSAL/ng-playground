import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormGroup } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { BasicInfoFormComponent } from "../basic-info-form/basic-info-form.component";
import { AddressFormComponent } from '../address-form/address-form.component';

@Component({
    selector: 'app-business-info-form',
    standalone: true,
    templateUrl: './business-info-form.component.html',
    styleUrl: './business-info-form.component.css',
    imports: [CommonModule, MatCheckbox, MatInput, MatFormField, MatLabel, BasicInfoFormComponent, AddressFormComponent]
})
export class BusinessInfoFormComponent {}
