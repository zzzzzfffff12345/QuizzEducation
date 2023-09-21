import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestKitHomeComponent } from './test-kit-home.component';

describe('TestKitHomeComponent', () => {
  let component: TestKitHomeComponent;
  let fixture: ComponentFixture<TestKitHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestKitHomeComponent]
    });
    fixture = TestBed.createComponent(TestKitHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
