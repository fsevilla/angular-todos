import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { SignupComponent} from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/todos', pathMatch: 'full' },
	{ path: 'todos', component: TodosComponent, pathMatch: 'full' },
	{ path: 'todos/:id', component: TodoDetailsComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'login', component: LoginComponent },
	{ path: '**', component: NotFoundComponent },
];

export const routing = RouterModule.forRoot(appRoutes);