import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe((url) => {
      url.forEach((e) => {
        const category = e.path;
        if (category) this.category = category;
      });
    });
  }

  categories = ['people', 'starships', 'planets'];
  category = this.categories[0];

  ngOnInit() {}
}
