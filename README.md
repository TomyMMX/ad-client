# Ad Client  
for my [Ad REST API](https://github.com/TomyMMX/ad-server). Written with [Angluar(v2)](http://angular.io).

## Description
The scaffolding for this project was generated with [Angular CLI](https://github.com/angular/angular-cli).  
If you have Angular CLI installed run `ng serve` for a dev server. Navigating to `http://localhost:4200/` will open the app.  

Unfourtunatelly I don't have the Ad server running for outside use, so here is a gif showing the client in action.

![App in action](https://dl.dropboxusercontent.com/u/109923/client.gif)

## Project organization
Most files are boilerplate created by the Anglular CLI. the code that is interesting for the list component can be found in [src/app/folders](https://github.com/TomyMMX/ad-client/tree/master/src/app/folders). 
- [adslist.component.ts](https://github.com/TomyMMX/ad-client/blob/master/src/app/folders/adslist.component.ts) - contains the code for geting end binding all the data
- [folder.service.ts](https://github.com/TomyMMX/ad-client/blob/master/src/app/folders/folder.service.ts) - contains the functiosn that get the necessary data from the ad API.
- [adslist.component.html](https://github.com/TomyMMX/ad-client/blob/master/src/app/folders/adslist.component.html) - holds the template for the folder/ad list

That is mostly it since the client has a fairly low amount of functionality.
