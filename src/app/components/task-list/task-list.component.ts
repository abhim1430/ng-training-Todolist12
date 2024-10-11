import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'; // <-- Import TaskService
import { Task } from '../../models/task.model'; // <-- Import Task model

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {} // <-- Inject TaskService

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }
}
