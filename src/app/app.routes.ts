import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { AComponent } from './a/a.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [{
            path: '/a',
            component: AComponent
        }]
    },
    {
        path: '/new_component',
        component: NewComponentComponent
    },
    {
        path: '**',
        component: AppComponent
    }
];
