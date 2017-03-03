import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Folder } from './models';
import { Ad } from './models';

@Injectable()
export class FolderService {
	private apiUrl = 'http://localhost:8080/api/';  // URL to web api
	
	constructor(private http: Http) { }
	
	//get all folders in some folder
	getFolders(fId): Promise<Folder[]> {
		return this.http.get(this.apiUrl + 'folders/parent/' + fId)
			.toPromise()
			.then(response => {
				//console.log(response.json());
				return response.json() as Folder[];
			}).catch(this.handleError);
	}
	
	//get all folders on the path to a folder
	getFolderPath(fId): Promise<Folder[]> {
		return this.http.get(this.apiUrl + 'folders/' + fId + '/path')
			.toPromise()
			.then(response => {
				return response.json() as Folder[];
			}).catch(this.handleError);
	}
	
	//get all ads in some folder
	getAds(fId): Promise<Ad[]> {
		return this.http.get(this.apiUrl + 'ads/folder/' + fId)
			.toPromise()
			.then(response => {
				//console.log(response.json());
				return response.json() as Ad[];
			}).catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
