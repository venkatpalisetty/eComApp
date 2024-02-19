import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, title: 'Login'},
  {path: 'home', component: HomeComponent, title: 'Home'},
  {path: 'card', component: CardComponent, title: 'card'},
  {path: 'itemList/:typeId', component: ItemListComponent, title: 'Item List'},
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
