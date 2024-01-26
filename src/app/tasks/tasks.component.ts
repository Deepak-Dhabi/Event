import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';
import { AuthService } from '../auth/auth.service';
import { Task } from './task.model';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  taskName: any;
  description:any;
   dueDate:  string | undefined;
  constructor(private tasksService: TasksService, public authService: AuthService) {}

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks();
  }

  addTask(taskName: any, description: any, dueDate: any): void {
    if (this.authService.isAuthenticatedUser()) {
      const newTask = {
        id: this.tasks.length + 1,
        name: taskName,
        description: description,
        dueDate: dueDate,
        status: 'Pending'
      };
      this.tasksService.addTask(newTask);
    }
  }

  markAsCompleted(taskId: number): void {
    if (this.authService.isAuthenticatedUser()) {
      this.tasksService.markAsCompleted(taskId);
    }
  }
  logout(){
    // logout method implementation
  }
}
