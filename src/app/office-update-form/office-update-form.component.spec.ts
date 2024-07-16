import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeUpdateFormComponent } from './office-update-form.component';

describe('OfficeUpdateFormComponent', () => {
  let component: OfficeUpdateFormComponent;
  let fixture: ComponentFixture<OfficeUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeUpdateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
