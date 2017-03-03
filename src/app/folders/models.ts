export class Folder {
	constructor(public id: number, public parentid: number, public name: string, public lastmodified: string) { }
	
	id: number;
	parentid: number;
	name: string;
	lastmodified: string;
}

export class Ad {	
	id: number;
	folderid: number;
	name: string;
	url: string;
	lastmodified: string;
}