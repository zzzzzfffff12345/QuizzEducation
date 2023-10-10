import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRequestComponent } from './exam-request.component';

describe('ExamRequestComponent', () => {
  let component: ExamRequestComponent;
  let fixture: ComponentFixture<ExamRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamRequestComponent]
    });
    fixture = TestBed.createComponent(ExamRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
