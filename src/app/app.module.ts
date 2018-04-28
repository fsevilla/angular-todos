import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoService} from './todos/todo.service';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { routing } from './app.routing';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './shared/services/user.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoDetailsComponent,
    NotFoundComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
  	TodoService,
    UserService
  ],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }
