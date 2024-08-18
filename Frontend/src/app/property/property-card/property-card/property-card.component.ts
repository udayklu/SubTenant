import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.scss'
})
export class PropertyCardComponent {
  property : any = {
    'id' : 1,
    'name' :  'Birla House',
    'type' :  'House',
    'price':  12000
  }

}
