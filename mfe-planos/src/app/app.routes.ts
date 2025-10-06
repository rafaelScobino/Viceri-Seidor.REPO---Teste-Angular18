import { Routes } from '@angular/router';
import { PlansListPageComponent } from './pages/plans-list-page/plans-list-page.component';
import { PlansObjectivesPageComponent } from './pages/plans-objectives-page/plans-objectives-page.component';

export const PLANOS_ROUTES: Routes = 
[
    {
        path:"",
        pathMatch:"full",
        redirectTo:"listagem"
    },
    {
        path:"listagem",
        component:PlansListPageComponent
    },
    {
        path:"plano/:id",
        component:PlansObjectivesPageComponent
    }
];
