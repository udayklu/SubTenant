import { Component, Input } from '@angular/core';
import { IProperty } from '../../IProperty.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.scss'
})
export class PropertyCardComponent {

  @Input() property : IProperty = {Id: 0, SellRent: 0, Name: "", Type: "", Price: 0, Image: ''};

}
