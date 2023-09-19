import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAminComponent } from './main-amin.component';

describe('MainAminComponent', () => {
  let component: MainAminComponent;
  let fixture: ComponentFixture<MainAminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainAminComponent]
    });
    fixture = TestBed.createComponent(MainAminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
