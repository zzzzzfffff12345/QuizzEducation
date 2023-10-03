import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableContestNGComponent } from './table-contest-ng.component';

describe('TableContestNGComponent', () => {
  let component: TableContestNGComponent;
  let fixture: ComponentFixture<TableContestNGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableContestNGComponent]
    });
    fixture = TestBed.createComponent(TableContestNGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
