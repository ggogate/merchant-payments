import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { TableComponent }   from './table/table.component';
import { AccountComponent } from './account/account.component';
import { CasesComponent } from './cases/cases.component';
import { StatementsComponent } from './statements/statements.component';
import { ServiceRequestsComponent } from './service-requests/service-requests.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'account',
        component: AccountComponent
    },
    {
        path: 'cases',
        component: CasesComponent
    },
    {
        path: 'statements',
        component: StatementsComponent
    },
    {
        path: 'servicerequests',
        component: ServiceRequestsComponent
    }
]
