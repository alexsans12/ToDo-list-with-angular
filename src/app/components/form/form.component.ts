import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import Task from '../../Models/task.model';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
	@Output() createdTask: EventEmitter<Task>;
	newTask: Task;

	constructor() {
		this.newTask = new Task();
		this.createdTask = new EventEmitter();
	}

	ngOnInit(): void {
	}

	submitTask() {
		this.createdTask.emit(this.newTask);
		this.newTask = new Task();
	}
}
