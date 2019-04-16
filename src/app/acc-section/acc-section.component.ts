import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'acc-section',
  templateUrl: './acc-section.component.html',
  styleUrls: ['./acc-section.component.css']
})
export class AccSectionComponent implements OnInit {
  @Input() open = false;
  @Input() title: string;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
