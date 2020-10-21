import { ImoveisComponent } from './imoveis/imoveis.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImovelComponent } from './imovel/imovel.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'imoveis',
    component: ImoveisComponent,
  },
  {
    path: 'imoveis/:id',
    component: ImovelComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
