import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreateFormComponent } from './employee-create-form.component';

describe('EmployeeCreateFormComponent', () => {
  let component: EmployeeCreateFormComponent;
  let fixture: ComponentFixture<EmployeeCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCreateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
