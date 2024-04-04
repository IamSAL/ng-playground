import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { AspFormBuilderService } from '../../../../services/asp-form-builder.service';

@Component({
  selector: 'app-form-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-preview.component.html',
  styleUrl: './form-preview.component.css',
})
export class FormPreviewComponent implements OnInit{
  formParent!: FormGroup;
  constructor(private formBuilderService: AspFormBuilderService) {}
  ngOnInit(): void {
    this.formParent = this.formBuilderService.AspFormGroup;
  }

  get ValueString():string {
    return JSON.stringify(this.formParent.value,null,6);
  }
}
