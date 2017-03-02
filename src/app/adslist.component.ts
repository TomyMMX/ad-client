import { Component } from '@angular/core';

import { Folder } from './models';
import { Ad } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './adslist.component.html',
  styleUrls: ['./adslist.component.css']
})
export class AdsListComponent {
  title = 'Ad API client';
}
