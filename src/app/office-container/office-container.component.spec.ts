import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeContainerComponent } from './office-container.component';

describe('OfficeContainerComponent', () => {
  let component: OfficeContainerComponent;
  let fixture: ComponentFixture<OfficeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
