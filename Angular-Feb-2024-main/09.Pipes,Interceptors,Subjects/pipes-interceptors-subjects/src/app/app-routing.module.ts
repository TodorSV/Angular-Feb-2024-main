import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: HomeComponent,
  },
  {
    path: 'lazy',// Зареждаме LazyModule само когато потребителят поиска или динамично, цялостната идея.
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
