import {Component, OnInit, Input} from '@angular/core';
import Task from '../../Models/task.model';
import { faChevronDown, faBackspace } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	@Input() tasksList: Task[];
	faChevronDown = faChevronDown;
	faBackspace = faBackspace;

	constructor() {
		this.tasksList = [{title: '', description: '', state: false}];
	}

	ngOnInit(): void {
	}

	showDescription(evt: any): void {
		let button = evt.target;
		let description = button.parentElement.parentElement.querySelector('.list__item-description');

		if(description)
			description.classList.toggle('list__item-description--show');
	}

	completeTask(evt: any, task: Task): void {
		let li = evt.target.parentElement.parentElement;
		let description = li.querySelector('.list__item-description');
		if(evt.target.checked)
			description.classList.remove('list__item-description--show');

		task.state = !task.state;
	}

	deleteTask(index: number): void {
		console.log(index);
		this.tasksList.splice(index,1);
		console.log(this.tasksList);
	}

}
