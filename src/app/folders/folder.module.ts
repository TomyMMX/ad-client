import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AdsListComponent }    from './adslist.component';
import { FolderService } from './folder.service';
import { FolderRoutingModule } from './folder-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FolderRoutingModule
  ],
  declarations: [
    AdsListComponent
  ],
  providers: [ FolderService ]
})

export class FoldersModule {}