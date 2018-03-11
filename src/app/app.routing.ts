import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import {CallbackComponent}    from './callback/callback.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthService } from './shared/services/auth.service';
import { AuthGuardService } from './shared/services/auth-guard.service';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'callback',
        component: CallbackComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'unauthorized',
        component: UnauthorizedComponent
    },
    {
        path: 'protected',
        component: ProtectedComponent,
        canActivate:[AuthGuardService]
    }

];
export const authProviders = [
    AuthGuardService,
    AuthService
];

export const routing = RouterModule.forRoot(appRoutes);

