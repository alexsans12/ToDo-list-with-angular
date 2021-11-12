export default class Task {
	title: string;
	description: string;
	state: boolean;

	constructor(title:string = '', description:string = '') {
		this.title = title;
		this.description = description;
		this.state = false;
	}
};
