import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MerchandiseComponent } from '../merchandise/merchandise.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { NavigationComponent_Authorized } from '../navigation_authorized/navigation_authorized.component';
import { AuthorizationComponent } from '../authorization/authorization.component';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [AppComponent, MerchandiseComponent, NavigationComponent, NavigationComponent_Authorized, AuthorizationComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }