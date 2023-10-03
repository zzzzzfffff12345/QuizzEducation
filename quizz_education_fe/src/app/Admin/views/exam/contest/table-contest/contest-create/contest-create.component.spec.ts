import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestCreateComponent } from './contest-create.component';

describe('ContestCreateComponent', () => {
  let component: ContestCreateComponent;
  let fixture: ComponentFixture<ContestCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContestCreateComponent]
    });
    fixture = TestBed.createComponent(ContestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
