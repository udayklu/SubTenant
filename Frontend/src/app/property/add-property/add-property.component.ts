import { Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.scss'
})
export class AddPropertyComponent {
  @ViewChild('formTabs') staticTabs?: TabsetComponent;
  propertyTypes : Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes : Array<string> = ['Semi', 'Full', 'Unfurnished'];
  directions : Array<string> = ['Easy', 'West', 'North', 'South'];
  
  onFormSubmitted($event : any) {
    console.log("congrats, form submitted  !!", $event)
  }

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
}
