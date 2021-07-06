import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { GridComponent } from './grid.component';
import { GridRoutingModule } from './grid-routing.module';
import { SideBarComponent } from './SideBar/SideBar.component';
import { CardListComponent } from './CardList/CardList.component';

@NgModule({
  imports: [CommonModule, SharedModule, GridRoutingModule],
  declarations: [GridComponent, SideBarComponent, CardListComponent],
})
export class GridModule {}
