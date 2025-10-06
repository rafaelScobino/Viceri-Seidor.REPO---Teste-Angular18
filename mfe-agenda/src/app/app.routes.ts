import { Routes } from '@angular/router';
import { ScheduleComponent } from './pages/schedule/schedule.component';

export const AGENDA_ROUTES: Routes = 
[
    {
        path:"",
        pathMatch:"full",
        redirectTo:"calendario"
    },
    {
        path:"calendario",
        component:ScheduleComponent
    }
];
