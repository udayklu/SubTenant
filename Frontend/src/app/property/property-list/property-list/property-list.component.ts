import { Component, inject, OnInit } from '@angular/core';
import { HousingService } from '../../../services/housing.service';
import { IProperty } from '../../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.scss'
})
export class PropertyListComponent implements OnInit {

  private housingService = inject(HousingService)
  properties : Array<IProperty> = [];

  ngOnInit(): void {
    this.housingService.getAllproperties().subscribe(
      data => {
        this.properties = data;
        console.log(data);
      },
      error => {console.log(error)}
    )
  }
}
