import { Component, OnInit, HostBinding } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/Rx';

import { Folder } from './models';
import { Ad } from './models';
import { FolderService } from './folder.service';

@Component({
	selector: 'product',
	templateUrl: './adslist.component.html',
	styleUrls: ['./adslist.component.css'],
	providers: [FolderService]
})

export class AdsListComponent implements OnInit {
	title = 'Ad API client';
	errorMessage: string;
	currentLocation = "";
	//folders to show
	folders: Folder[];
	//all folders on the path to the current one
	currentPath: Folder[];
	//all ads in the current folder
	ads: Ad[];
  
	constructor(
		private folderService: FolderService,
		private route: ActivatedRoute,
		private router: Router
	) {
		this.currentPath = [];		
	}
	
	ngOnInit(): void {
		this.route.params
		.switchMap((params: Params) => Observable.forkJoin(
			// (+) converts string 'id' to a number
			this.folderService.getFolders(+params['id']), //get all folders in the current folder
			this.folderService.getAds(+params['id']), //get all ads in the current folder
			this.folderService.getFolderPath(+params['id']) //get the path to this folder
		)).subscribe(
			(data) => {
				this.folders = data[0] as Folder[];
				this.ads = data[1] as Ad[];
				this.currentPath = data[2] as Folder[];
				this.setPathString();},
			error => this.errorMessage = <any>error);	
	} 
	
	/*getFolders(fId): void {
		this.folderService.getFolders(fId).then(folders => this.folders = folders);
	}*/
	
	//get the parent id so we can move back one folder
	moveBackOnPath(): number{
		var parentid = 0;
		if(this.currentPath.length > 0){
			parentid = this.currentPath[this.currentPath.length-1].parentid;			
		}		
		
		return parentid;		
	}
	
	//compose the path string from the path array
	setPathString(): void {
		this.currentLocation = "";
		for (var i = 0; i < this.currentPath.length; i++){
			this.currentLocation += this.currentPath[i].name + "/";
		}
	}
	
	/*CLICK HANDLERS*/
	//move to selected folder
	onSelect(folder: Folder): void {	
		this.router.navigate(['/folder', folder.id]);
	}
	
	//move to previous folder on path
	goToParent(): void {
		this.router.navigate(['/folder', this.moveBackOnPath()]);
	}
}
