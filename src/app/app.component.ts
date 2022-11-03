import { Component } from "@angular/core";

// Component decorator takes some known properties. Selector and Template are mandatory.
@Component({
  selector: 'rt-root',
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.css']
})
// Export is needed to be added so that we can use this component somewhere else. 
export class AppComponent{}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'essentialtrain';
// }
