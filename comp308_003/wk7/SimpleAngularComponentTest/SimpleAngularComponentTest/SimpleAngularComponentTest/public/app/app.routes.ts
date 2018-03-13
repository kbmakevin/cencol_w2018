import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const AppRoutes: Routes = [
        //{ path: 'about', component: AboutComponent }

    {
        path: '',
        component: AppComponent,
        data: { title: 'Angular Test Example' }
    },

];
