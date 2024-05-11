import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCheckListAuditComponent } from './list-check-list-audit.component';

describe('CrudCheckListAuditComponent', () => {
  let component: CrudCheckListAuditComponent;
  let fixture: ComponentFixture<CrudCheckListAuditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudCheckListAuditComponent]
    });
    fixture = TestBed.createComponent(CrudCheckListAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
