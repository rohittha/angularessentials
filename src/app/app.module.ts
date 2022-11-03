import { NgModule } from '@angular/core';
//Since we want to use the app in a browser we need the BrowserModule
//Contains core directives, pipes and more for working with the DOM.
import { BrowserModule } from '@angular/platform-browser';
//Instead of a module, we can load directly from a file
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';

@NgModule({
  //Bring other modules that this module needs
  imports: [BrowserModule],
  //Bring in component, directives and pipes avaiable to this module
  declarations: [AppComponent, MediaItemComponent],
  //components that will be starting point
  bootstrap: [AppComponent]
})
export class AppModule{}

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
