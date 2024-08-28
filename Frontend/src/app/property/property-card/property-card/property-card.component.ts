import { Component, Input } from '@angular/core';
import { IProperty } from '../../../models/IProperty';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.scss'
})
export class PropertyCardComponent {

  @Input() property : IProperty = {Id: 0, SellRent: 0, Name: '', PropertyType: '', Price: 0, Image: '', BHK: 0, BuiltArea: 0, City: '',  FurnitureType: '', RTM: 0, Address: '', Address2: '', Address3: '', AOP: 0, Bathrooms: 0, CarpetArea: 0, Description: '', FloorNo: 0, Gated: 0, MainEntrance: '', Maintenance: 0, Posession: '', PostedOn: '', Security: 0, TotalFloor: 0 };
  
  @Input() hideIcons : boolean = false;

}
