import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeTableTableComponent } from './office-table-table.component';

describe('OfficeTableTableComponent', () => {
  let component: OfficeTableTableComponent;
  let fixture: ComponentFixture<OfficeTableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeTableTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeTableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
