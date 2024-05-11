import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crud-site-audit',
  templateUrl: './list-site-audit.component.html',
  styleUrls: ['./list-site-audit.component.scss']
})
export class CrudSiteAuditComponent implements OnInit {
  siteAudits: any[] = [];
  totalRecords: number;
  skip = 0;
  take = 10;

  constructor(private http: HttpClient) { }

  if_show_ajouter = false;
  if_show_doc = false;
  data_selected_ddp: any;
  if_show_modifier = false;
  Header_info: any;

  ngOnInit(): void {
    this.loadSiteAudits();
  }

  private apiUrl = 'https://localhost:44305/api/SiteAudit';

  loadSiteAudits() {
    this.getSiteAudits().subscribe(
      (data) => {
        this.siteAudits = data;
        this.totalRecords = data.length;
      },
      (error) => {
        console.error('Erreur lors de la récupération des audits de site depuis le backend : ', error);
      }
    );
  }

  getSiteAudits(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  onAdd() {
    console.log('Ajouter une checklist');
  }

  onEdit(SiteAudit: any) {
    console.log('Modifier une checklist :', SiteAudit);
  }

  onDelete(SiteAuditId: number) {
    console.log('Supprimer une checklist avec l\'ID :', SiteAuditId);
  }

  ShowFormulaire(action: any, data_selected_ddp: any = null) {
    if (action == 'Ajouté') {
      setTimeout(() => {
        this.if_show_ajouter = true;
      }, 100);
    } else if (action == 'modifier') {
      this.data_selected_ddp = data_selected_ddp;
      this.Header_info = `Modifiation le site à auditer : `;
      setTimeout(() => {
        this.if_show_modifier = true;
      }, 100);
    }
  }

  paginate(event: { first: number; rows: number }) {
    this.skip = event.first;
    this.take = event.rows;
  }

  Sort(event: any) {
    // Implémentez votre logique de tri ici
  }
}
