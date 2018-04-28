import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { SignupComponent} from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { UnauthGuard } from './shared/guards/unauth.guard';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/todos', pathMatch: 'full' },
	{ path: 'todos', component: TodosComponent, pathMatch: 'full', canActivate: [AuthGuard] },
	{ path: 'todos/:id', component: TodoDetailsComponent, canActivate: [AuthGuard] },
	{ path: 'signup', component: SignupComponent, canActivate: [UnauthGuard] },
	{ path: 'login', component: LoginComponent, canActivate: [UnauthGuard] },
	{ path: '**', component: NotFoundComponent },
];

export const routing = RouterModule.forRoot(appRoutes);