import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudSiteAuditComponent } from './list-site-audit/list-site-audit.component';

const routes: Routes = [
  { path: '', component: CrudSiteAuditComponent },
  // Ajoutez d'autres routes au besoin
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteAuditRoutingModule { }
