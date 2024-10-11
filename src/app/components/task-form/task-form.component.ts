import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() task: Task | null = null;
  @Output() save = new EventEmitter<Task>();

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      AssignedTo: ['', Validators.required],
      Status: ['', Validators.required],
      dueDate: ['', Validators.required],
      priority: ['', Validators.required],
      comments: [''],
      id: [null],
    });
  }

  ngOnInit(): void {
    if (this.task) {
      this.taskForm.patchValue(this.task);
    }
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      this.save.emit(this.taskForm.value);
    }
  }
}
