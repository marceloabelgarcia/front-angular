import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { SwapiService } from '../../../shared/services/swapi.service';

@Component({
  selector: 'app-CardList',
  templateUrl: './CardList.component.html',
  styleUrls: ['./CardList.component.scss'],
})
export class CardListComponent implements OnChanges {
  constructor(protected swapiService: SwapiService) {}

  @Input() category = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes.category) {
      this.reload();
    }
  }

  public swapilist: any[] = [];

  public reload() {
    this.swapiService.getList(this.category).subscribe((data: any) => {
      this.swapilist = data.results;
    });
  }
}
