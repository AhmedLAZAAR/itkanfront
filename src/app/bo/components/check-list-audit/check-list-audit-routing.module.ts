import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudCheckListAuditComponent } from './list-check-list-audit/list-check-list-audit.component';

const routes: Routes = [
  { path: '', component: CrudCheckListAuditComponent },
  // Ajoutez d'autres routes au besoin
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckListAuditRoutingModule { }
