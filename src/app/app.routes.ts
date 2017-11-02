import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SelectComponent } from './components/select/select.component';
import { NewComponent } from './components/new/new.component';
import { ManageComponent } from './components/manage/manage.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
    
    {
        path: '',
        component: LoginComponent
    },    
    {
        path: 'home',
        component: HomeComponent
    },    

    {
        path: 'select',
        component: SelectComponent
    },   
    
    {
        path: 'new',
        component: NewComponent
    },   
    {
        path: 'manage',
        component: ManageComponent
    },   
    {
        path: 'edit/:employee/:week',
        component: EditComponent
    }   
    
];
export const RoutingModule = RouterModule.forRoot(routes);