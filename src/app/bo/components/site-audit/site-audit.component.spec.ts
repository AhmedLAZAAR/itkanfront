import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAuditComponent } from './site-audit.component';

describe('SiteAuditComponent', () => {
  let component: SiteAuditComponent;
  let fixture: ComponentFixture<SiteAuditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteAuditComponent]
    });
    fixture = TestBed.createComponent(SiteAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
