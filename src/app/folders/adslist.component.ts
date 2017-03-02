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
  
	getFolders(fId): void {
		this.folderService.getFolders(fId).then(folders => this.folders = folders);
	}
	
	//compose the path string from the path array
	setPathString(): void {
		this.currentLocation = "";
		for (var i = 0; i < this.currentPath.length; i++){
			this.currentLocation += this.currentPath[i].name + "/";
		}
	}
	
	ngOnInit(): void {
		this.route.params
		// (+) converts string 'id' to a number
		.switchMap((params: Params) => {
			return this.folderService.getFolders(+params['id']);
		})
		.subscribe((folders: Folder[]) => {
			this.folders = folders;
			this.setPathString();
		});			
	} 

	onSelect(folder: Folder): void {
		//push the new folder to the path
		this.currentPath.push(folder);		
		this.router.navigate(['/folder', folder.id]);
	}
	
	goToParrent(): void {
		var parentid = 0;
		if(this.currentPath.length > 0){
			parentid = this.currentPath[this.currentPath.length-1].parentid;			
		}		
		//remove the folder from path
		this.currentPath.splice(-1,1);
		
		this.router.navigate(['/folder', parentid]);
	}
}
