import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestKitDetailComponent } from './test-kit-detail.component';

describe('TestKitDetailComponent', () => {
  let component: TestKitDetailComponent;
  let fixture: ComponentFixture<TestKitDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestKitDetailComponent]
    });
    fixture = TestBed.createComponent(TestKitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
