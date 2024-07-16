import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeCreateFormComponent } from './office-create-form.component';

describe('OfficeCreateFormComponent', () => {
  let component: OfficeCreateFormComponent;
  let fixture: ComponentFixture<OfficeCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeCreateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
