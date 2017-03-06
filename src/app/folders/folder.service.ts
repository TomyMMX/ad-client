import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { Folder } from './models';
import { Ad } from './models';

@Injectable()
export class FolderService {
	private apiUrl = 'http://localhost:8080/api/';  // URL to web api
	
	constructor(private http: Http) { }
	
	//get all folders in some folder
	getFolders(fId): Observable<Folder[]> {
		return this.http.get(this.apiUrl + 'folders/parent/' + fId)
			.map(response =>  response.json() as Folder[]).catch(this.handleError);
	}
	
	//get all folders on the path to a folder
	getFolderPath(fId): Observable<Folder[]> {
		return this.http.get(this.apiUrl + 'folders/' + fId + '/path')			
			.map(response => response.json() as Folder[]).catch(this.handleError);
	}
	
	//get all ads in some folder
	getAds(fId): Observable<Ad[]> {
		return this.http.get(this.apiUrl + 'ads/folder/' + fId)
			.map(response => response.json() as Ad[]).catch(this.handleError);
	}
	
	private handleError (error: any) {
    	// In a real world app, we might use a remote logging infrastructure
    	let errMsg: string;
    	errMsg = error.message ? error.message : error.toString();
    	
		console.error("Problem getting data from server: " + errMsg);
		return Observable.throw(errMsg);
	}
}
