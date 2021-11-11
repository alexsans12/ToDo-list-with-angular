import {Component} from '@angular/core';
import Task from './Models/task.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	tasks: Task[];

	constructor() {
		this.tasks = [];
	}

	addTask(evt:any) {
		this.tasks.push(evt);
	}
}
