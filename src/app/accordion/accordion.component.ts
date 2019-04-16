import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { AccSectionComponent } from '../acc-section/acc-section.component';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit, AfterContentInit {
  @ContentChildren(AccSectionComponent) sections: QueryList<AccSectionComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.sections.toArray()[0].open = true;
    this.sections.toArray().forEach((section: AccSectionComponent) => {
       section.toggle.subscribe(() => {
        this.openSection(section);
      });
    });
  }
 
  openSection(section: AccSectionComponent) {
    this.sections.toArray().forEach(p => p.open = false);
    section.open = true;
  }
}
