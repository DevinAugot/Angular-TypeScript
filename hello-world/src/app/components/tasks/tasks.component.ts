import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  //. to use a service you have to provide it within the contructor
  constructor(private TaskService: TaskService) {}


  // you need to use describe to watch the tasks
  ngOnInit(): void {
    this.TaskService.getTasks().subscribe((tasks)=>{this.tasks = tasks});
  }
}
