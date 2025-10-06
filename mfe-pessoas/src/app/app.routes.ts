import { Routes } from '@angular/router';
import { PeopleListComponent } from './pages/people-list/people-list.component';
import { PeopleFormPageComponent } from './pages/people-form-page/people-form-page.component';


export const PESSOAS_ROUTES: Routes =
[
    {
        path:"",
        pathMatch: "full",
        redirectTo: "listagem"
    },
    {
       path:"listagem",
       component:PeopleListComponent
    },
    {
        path:"pessoa",
        children:
        [
            {
                path:"cadastro",
                component:PeopleFormPageComponent
            },
            {
                path:"edicao/:id",
                component:PeopleFormPageComponent
            }
        ]
    }

];
