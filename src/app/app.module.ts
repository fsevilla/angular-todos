import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoService} from './todos/todo.service';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { routing } from './app.routing';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './shared/services/user.service';
import { LoginComponent } from './login/login.component';
import { ErrorHandlerService } from './shared/services/error-handler.service';
import { AuthService } from './shared/services/auth.service';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { UnauthGuard } from './shared/guards/unauth.guard';
import { CustomHttpService } from './shared/services/custom-http.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoDetailsComponent,
    NotFoundComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    routing
  ],
  providers: [
  	TodoService,
    UserService,
    ErrorHandlerService,
    AuthService,
    AuthGuard,
    UnauthGuard,
    CustomHttpService
  ],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }
