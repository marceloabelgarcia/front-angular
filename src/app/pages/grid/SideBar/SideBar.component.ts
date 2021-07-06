import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-SideBar',
  templateUrl: './SideBar.component.html',
  styleUrls: ['./SideBar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor() {}

  @Input() title = '';
  @Input() categories = [];

  menuOpen = false;

  ngOnInit() {}

  public handleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  public handleClose() {
    this.menuOpen = false;
  }
}
