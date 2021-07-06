import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './UiButton.component.html',
  styleUrls: ['./UiButton.component.scss'],
})
export class UiButtonComponent implements OnInit {
  constructor() {}

  @Input() color = 'default';
  @Input() disabled = false;

  ngOnInit() {}
}
