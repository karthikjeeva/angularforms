import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { TemplateDrivenComponent } from '../template-driven/template-driven.component';
import { ReactiveComponent } from '../reactive/reactive.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'template', component: TemplateDrivenComponent },
  { path: 'reactive', component: ReactiveComponent }
 
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
