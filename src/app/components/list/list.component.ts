import {Component, OnInit, Input} from '@angular/core';
import Task from '../../Models/task.model';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	@Input() tasksList: Task[];

	constructor() {
		this.tasksList = [{title: '', description: ''}];
	}

	ngOnInit(): void {
	}

	showTasks() {
		let list = '';
		this.tasksList.forEach(task => {
			list += `<li class="list__item">${task.title}</li>`;
		});
		return list;
	}

}
