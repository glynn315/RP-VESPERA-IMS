import { Routes } from '@angular/router';
import { Dashboard } from './views/dashboard/dashboard';
import { Layout } from './layout/layout';
import { Issues } from './views/issues/issues';
import { History } from './views/history/history';
import { Reports } from './views/reports/reports';
import { Projects } from './views/projects/projects';

export const routes: Routes = [
    {path: '' , redirectTo:'home' , pathMatch: 'full'},
    {path:'home' , component : Layout ,
        children:
        [
            {path:'dashboard', component: Dashboard},
            {path:'issue', component: Issues},
            {path:'history', component: History},
            {path:'reports', component: Reports},
            {path:'projects', component: Projects},
        ]
    }
];
