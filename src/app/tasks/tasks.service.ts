import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  //Stub data considering as API response & commented all methods below for actual apis.
  tasks: Task[] =  [
    {
      "id": 1,
      "name": "Task 1",
      "description": "Complete Angular project",
      "dueDate": "2024-02-01",
      "status": "Pending"
    },
    {
      "id": 2,
      "name": "Task 2",
      "description": "Write documentation",
      "dueDate": "2024-02-10",
      "status": "Completed"
    },
    {
      "id": 3,
      "name": "Task 3",
      "description": "Review code",
      "dueDate": "2024-02-05",
      "status": "Pending"
    }
    
  ]
  
  //method for actual api call Implementation logic to fetch tasks from the backend

  // getTasks(): Observable<Task[]> {
  //   return this.http.get<Task[]>(this.apiUrl);
    
  // }

  getTasks(): Task[] {
    return this.tasks;
  }

 //method for actual api call Implementation logic to add tasks to the backend 

  // addTask(task: Task): Observable<Task> {
  //   return this.http.post<Task>(this.apiUrl, task);
  // }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

 //method for actual api call Implementation logic to mark a task as completed in the backend 

  // markAsCompleted(taskId: number): Observable<void> {
  //   const url = `${this.apiUrl}/${taskId}/complete`;
  //   return this.http.put<void>(url, {});
  // }

  markAsCompleted(taskId: number): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.status = 'Completed';
    }
  }
}
