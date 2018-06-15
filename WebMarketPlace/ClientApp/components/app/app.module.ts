import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MerchandiseComponent } from '../merchandise/merchandise.component';
import { AuthorizationComponent } from '../authorization/authorization.component';
import { BasketComponent } from '../basket/basket.component';
import { UserComponent } from '../user/user.component';

import { UserService } from '../user/user.service';
import { MerchandiseService } from '../merchandise/merchandise.service';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
    declarations: [AppComponent, MerchandiseComponent, AuthorizationComponent, BasketComponent, UserComponent],
    bootstrap: [AppComponent],
    providers: [UserService, MerchandiseService]
})
export class AppModule { }