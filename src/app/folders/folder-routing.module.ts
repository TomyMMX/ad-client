import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdsListComponent }    from './adslist.component';

const folderRoutes: Routes = [
  { path: 'folder/:id', component: AdsListComponent } 
];

@NgModule({
  imports: [
    RouterModule.forChild(folderRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FolderRoutingModule { }