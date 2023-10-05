import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamClassCreateComponent } from './exam-class-create.component';

describe('ExamClassCreateComponent', () => {
  let component: ExamClassCreateComponent;
  let fixture: ComponentFixture<ExamClassCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamClassCreateComponent]
    });
    fixture = TestBed.createComponent(ExamClassCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
