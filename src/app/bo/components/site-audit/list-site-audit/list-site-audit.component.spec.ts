import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSiteAuditComponent } from './list-site-audit.component';

describe('CrudSiteAuditComponent', () => {
  let component: CrudSiteAuditComponent;
  let fixture: ComponentFixture<CrudSiteAuditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudSiteAuditComponent]
    });
    fixture = TestBed.createComponent(CrudSiteAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
