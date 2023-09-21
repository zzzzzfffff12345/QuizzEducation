import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableContestComponent } from './table-contest.component';

describe('TableContestComponent', () => {
  let component: TableContestComponent;
  let fixture: ComponentFixture<TableContestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableContestComponent]
    });
    fixture = TestBed.createComponent(TableContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
