import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormTermsComponent } from './form-terms.component';

describe('FormTermsComponent', () => {
  let component: FormTermsComponent;
  let fixture: ComponentFixture<FormTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTermsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
