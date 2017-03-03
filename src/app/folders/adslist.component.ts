import { Component, OnInit, HostBinding } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

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
	currentLocation = "";
	folders: Folder[];
	currentPath: Folder[];
  
	constructor(
		private folderService: FolderService,
		private route: ActivatedRoute,
		private router: Router
	) {
		this.currentPath = [];		
	}
	
	ngOnInit(): void {
		this.route.params
		// (+) converts string 'id' to a number
		.switchMap((params: Params) => {
			return this.folderService.getFolders(+params['id']);
		})
		.subscribe((folders: Folder[]) => {
			this.folders = folders;			
			this.handleBackClick();			
			this.setPathString();
		});			
	} 
	
	//if the id changed to the parent of the last folder we went back... set path acordingly
	handleBackClick(): void {
		if(this.currentPath.length > 0){
			if(this.currentPath[this.currentPath.length-1].parentid === +this.route.snapshot.params['id']){
				this.moveBackOnPath();
			}
		}
	}
  
	/*getFolders(fId): void {
		this.folderService.getFolders(fId).then(folders => this.folders = folders);
	}*/
	
	moveBackOnPath(): number{
		var parentid = 0;
		if(this.currentPath.length > 0){
			parentid = this.currentPath[this.currentPath.length-1].parentid;			
		}		
		//remove the folder from path
		this.currentPath.splice(-1,1);
		
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
	//move to selected fodler
	onSelect(folder: Folder): void {
		//push the new folder to the path
		this.currentPath.push(folder);		
		this.router.navigate(['/folder', folder.id]);
	}
	
	//move to previous folder on path
	goToParrent(): void {
		this.router.navigate(['/folder', this.moveBackOnPath()]);
	}
}
