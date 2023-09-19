import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutTeacherComponent } from './default-layout-teacher.component';

describe('DefaultLayoutTeacherComponent', () => {
  let component: DefaultLayoutTeacherComponent;
  let fixture: ComponentFixture<DefaultLayoutTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultLayoutTeacherComponent]
    });
    fixture = TestBed.createComponent(DefaultLayoutTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
