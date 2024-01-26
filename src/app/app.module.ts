import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { AuthService } from './auth/auth.service';
import { TasksService } from './tasks/tasks.service';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
      
    ])
  ],
  providers: [AuthService, TasksService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
