import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HomeDashboardComponent } from './pages/home/components/home-dashboard/home-dashboard.component';
import { AuthGuard } from './shared/guards/AuthGuard';

export const HOME_ROUTES: Routes = [
    //IMPLEMENTAR GUARDA DE ROTA COM REDIRECT PARA DASHBOARD OU LANDING PAGE DE LOGIN
    {
        path: "",
        pathMatch: "full",
        redirectTo: "dashboard"
    },
    {
        path:"dashboard",
        canActivate:[AuthGuard],
        component:HomeComponent,
    },
    {
        path:"login",
        component: LoginComponent
    },

];
