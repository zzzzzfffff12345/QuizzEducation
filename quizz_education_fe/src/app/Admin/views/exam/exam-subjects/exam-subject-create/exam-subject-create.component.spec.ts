import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSubjectCreateComponent } from './exam-subject-create.component';

describe('ExamSubjectCreateComponent', () => {
  let component: ExamSubjectCreateComponent;
  let fixture: ComponentFixture<ExamSubjectCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamSubjectCreateComponent]
    });
    fixture = TestBed.createComponent(ExamSubjectCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
