import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './bo/components/notfound/notfound.component';
import { CountryService } from './bo/service/country.service';
import { CustomerService} from './bo/service/customer.service';
import { EventService } from './bo/service/event.service';
import { IconService } from './bo/service/icon.service';
import { NodeService } from './bo/service/node.service';
import { PhotoService } from './bo/service/photo.service';
import { SharedModule } from './shared/shared.module';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { NgxPrintModule } from 'ngx-print';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ProcedureComponent } from './bo/components/procedure/procedure.component';
import { ProcObjectifsComponent } from './bo/components/proc-objectifs/proc-objectifs.component';
import { IndicateurComponent } from './bo/components/indicateur/indicateur.component';
import { LeadershipComponent } from './bo/components/leadership/leadership.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { HomeComponent } from './bo/components/home/home.component';
import { CrudCheckListAuditComponent } from './bo/components/check-list-audit/list-check-list-audit/list-check-list-audit.component';
import { CrudSiteAuditComponent } from './bo/components/site-audit/list-site-audit/list-site-audit.component';
import { UpdateSiteAuditComponent } from './bo/components/site-audit/update-site-audit/update-site-audit.component';

registerLocaleData(localeFr);

@NgModule({
    declarations: [AppComponent,HomeComponent, NotfoundComponent , ProcObjectifsComponent , ProcedureComponent, IndicateurComponent, LeadershipComponent, CrudCheckListAuditComponent, CrudSiteAuditComponent, UpdateSiteAuditComponent ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        SharedModule,
        NgxPrintModule,
        BrowserAnimationsModule,
        FileUploadModule,
        NgxExtendedPdfViewerModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'fr-FR' },
        { provide: LocationStrategy, useClass: HashLocationStrategy }, // Correction ici
        CountryService,
        CustomerService,
        EventService,
        IconService,
        NodeService,
        PhotoService,
        MessageService,
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
