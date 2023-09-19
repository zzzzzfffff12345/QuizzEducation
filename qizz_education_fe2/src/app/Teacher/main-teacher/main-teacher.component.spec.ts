import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTeacherComponent } from './main-teacher.component';

describe('MainTeacherComponent', () => {
  let component: MainTeacherComponent;
  let fixture: ComponentFixture<MainTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainTeacherComponent]
    });
    fixture = TestBed.createComponent(MainTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
