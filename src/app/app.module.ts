import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TopLeftSideComponent } from './top-left-side/top-left-side.component';
import { TopRightSideComponent } from './top-right-side/top-right-side.component';
import { SortComponent } from './sort/sort.component';
import { FilesComponent } from './files/files.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TopLeftSideComponent,
    TopRightSideComponent,
    SortComponent,
    FilesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
