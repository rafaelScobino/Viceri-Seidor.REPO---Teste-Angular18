import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/AuthGuard';

export const routes: Routes =
[
    {
        pathMatch: "full",
        path: "",
        redirectTo: 'home',
    },
    {
        path: 'home',

        loadChildren: () => loadRemoteModule('mfeHome','./routes')
            .then((m)=> m.HOME_ROUTES)
    },
    {
        path: 'pessoas',
      canActivate:[AuthGuard],
        loadChildren: () => loadRemoteModule('mfePessoas','./routes')
            .then((m)=> m.PESSOAS_ROUTES)
    },
    {
        path: 'agenda',
canActivate:[AuthGuard],
        loadChildren: () => loadRemoteModule('mfeAgenda','./routes')
            .then((m)=> m.AGENDA_ROUTES)
    },
    {
        path: 'planos',
canActivate:[AuthGuard],
        loadChildren: () => loadRemoteModule('mfePlanos','./routes')
            .then((m)=> m.PLANOS_ROUTES)
    }

];
