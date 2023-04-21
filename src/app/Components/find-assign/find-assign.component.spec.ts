import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAssignComponent } from './find-assign.component';

describe('FindAssignComponent', () => {
  let component: FindAssignComponent;
  let fixture: ComponentFixture<FindAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAssignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
