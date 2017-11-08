import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SelectComponent } from './components/select/select.component';
import { NewComponent } from './components/new/new.component';
import { ManageComponent } from './components/manage/manage.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { AdminComponent } from './components/admin/admin.component';
import { TestComponent } from './components/test/test.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ViewComponent } from './components/users/view/view.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';

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
        path: 'test',
        component: TestComponent
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
        path: 'admin',
        component: AdminComponent
    },       
    {
        path: 'edit/:employee/:week',
        component: EditComponent
    },
    {
        path: 'users/view',
        component: ViewComponent
    },
    {
        path: 'users/register',
        component: RegisterComponent
    },
    {
        path: 'users/user-edit/:user-id',
        component: UserEditComponent
    }       
           
];
export const RoutingModule = RouterModule.forRoot(routes);