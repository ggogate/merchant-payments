import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';

import { DashboardComponent }   from './dashboard/dashboard.component';

import { TableComponent }   from './table/table.component';
import { AccountComponent } from './account/account.component';
import { ReportsComponent } from './reports/reports.component';
import { CasesComponent } from './cases/cases.component';
import { StatementsComponent } from './statements/statements.component';
import { ServiceRequestsComponent } from './service-requests/service-requests.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { CasesFormComponent } from './cases-form/cases-form.component';
import { StatementsFormComponent } from './statements-form/statements-form.component';
import { ServiceRequestFormComponent } from './service-request-form/service-request-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TableComponent,
    AccountComponent,
    ReportsComponent,
    CasesComponent,
    StatementsComponent,
    ServiceRequestsComponent,
    AccountFormComponent,
    CasesFormComponent,
    StatementsFormComponent,
    ServiceRequestFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
