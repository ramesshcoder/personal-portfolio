import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'3',component:HomeComponent
    },
    {
        path:'About',component:AboutComponent
    }
    ,
    {
        path:'education',component:HomeComponent
    },
    {
        path:'3',component:HomeComponent
    },
    {
        path:'3',component:HomeComponent
    }
];
