import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';
import { DevelopersService } from './services/developers.service';
import { PaginationModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [DevelopersService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
