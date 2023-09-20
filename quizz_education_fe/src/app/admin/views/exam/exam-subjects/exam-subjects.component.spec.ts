import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSubjectsComponent } from './exam-subjects.component';

describe('ExamSubjectsComponent', () => {
  let component: ExamSubjectsComponent;
  let fixture: ComponentFixture<ExamSubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamSubjectsComponent]
    });
    fixture = TestBed.createComponent(ExamSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
