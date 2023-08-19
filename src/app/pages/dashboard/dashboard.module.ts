import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';


@NgModule({
  declarations: [
  DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NavbarModule,
    SidebarModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
