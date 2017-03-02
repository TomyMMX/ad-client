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
	folders: Folder[];
	currentFolder: Folder;
  
	constructor(
		private folderService: FolderService,
		private route: ActivatedRoute,
		private router: Router
	) {}
  
	getFolders(fId): void {
		this.folderService.getFolders(fId).then(folders => this.folders = folders);
	}
  
	ngOnInit(): void {
		this.route.params
		// (+) converts string 'id' to a number
		.switchMap((params: Params) => {
			var id = +params['id'];
			return this.folderService.getFolders(id);
		})
		.subscribe((folders: Folder[]) => this.folders = folders);			
	}  
	
	onSelect(folder: Folder): void {
		this.router.navigate(['/folder', folder.id]);
	}
}
