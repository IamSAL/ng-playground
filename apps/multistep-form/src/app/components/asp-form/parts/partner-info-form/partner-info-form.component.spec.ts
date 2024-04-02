import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnerInfoFormComponent } from './partner-info-form.component';

describe('PartnerInfoFormComponent', () => {
  let component: PartnerInfoFormComponent;
  let fixture: ComponentFixture<PartnerInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerInfoFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartnerInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
