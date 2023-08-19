import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SistemaComponent } from './sistema.component';


const routes: Routes = [{
  path: '',
  component: SistemaComponent,
}];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class SistemaRoutingModule { }
