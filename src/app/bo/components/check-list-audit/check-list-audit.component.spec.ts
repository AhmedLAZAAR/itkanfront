import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListAuditComponent } from './check-list-audit.component';

describe('CheckListAuditComponent', () => {
  let component: CheckListAuditComponent;
  let fixture: ComponentFixture<CheckListAuditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckListAuditComponent]
    });
    fixture = TestBed.createComponent(CheckListAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
