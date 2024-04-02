import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormGroup } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button'
@Component({
  selector: 'app-partner-info-form',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckbox,
    MatInput,
    MatFormField,
    MatLabel,
    MatButtonModule,
  ],
  templateUrl: './partner-info-form.component.html',
  styleUrl: './partner-info-form.component.css',
})
export class PartnerInfoFormComponent {}
