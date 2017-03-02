import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Folder } from './models';

@Injectable()
export class FolderService {
	private apiUrl = 'http://localhost:8080/api/folders/parent/';  // URL to web api
	
	constructor(private http: Http) { }
	
	getFolders(fId): Promise<Folder[]> {
		return this.http.get(this.apiUrl+fId)
			.toPromise()
			.then(response => {
				console.log(response.json());
				return response.json() as Folder[];
			}).catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
