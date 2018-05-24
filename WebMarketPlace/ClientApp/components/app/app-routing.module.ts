import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasketComponent } from '../basket/basket.component';
import { UserComponent } from '../user/user.component';
import { MerchandiseComponent } from '../merchandise/merchandise.component';

const routes: Routes = [
    { path: '', redirectTo: '/merchandise', pathMatch: 'full' },
    { path: 'merchandise', component: MerchandiseComponent },
    { path: 'basket', component: BasketComponent },
    { path: 'user', component: UserComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }