export class Folder {
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