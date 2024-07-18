import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeTableDetailComponent } from './office-table-detail.component';

describe('OfficeTableDetailComponent', () => {
  let component: OfficeTableDetailComponent;
  let fixture: ComponentFixture<OfficeTableDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeTableDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeTableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
