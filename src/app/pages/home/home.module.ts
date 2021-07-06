import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  declarations: [HomeComponent],
  exports: [],
})
export class HomeModule {}
