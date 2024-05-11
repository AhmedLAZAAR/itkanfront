import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-check-list-audit',
  templateUrl: './list-check-list-audit.component.html',
  styleUrls: ['./list-check-list-audit.component.scss']
})
export class CrudCheckListAuditComponent {
  checklistAudits: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadChecklistAudits();
  }

  loadChecklistAudits(): void {
    this.getAllChecklistAudits().subscribe(
      (data: any[]) => {
        this.checklistAudits = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des données :', error);
      }
    );
  }

  onAdd() {
    console.log('Ajouter une checklist');
  }

  onEdit(checklistAudit: any) {
    console.log('Modifier une checklist :', checklistAudit);
  }

  onDelete(checklistAuditId: number) {
    console.log('Supprimer une checklist avec l\'ID :', checklistAuditId);
  }
  private apiUrl = 'https://localhost:44305/api/ChecklistAudit';

  

  getAllChecklistAudits(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getSingleChecklistAudit(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addChecklistAudit(checklistAudit: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, checklistAudit);
  }

  updateChecklistAudit(id: number, checklistAudit: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, checklistAudit);
  }

  deleteChecklistAudit(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
