import { Component, inject, OnInit } from '@angular/core';
import { HousingService } from '../../../services/housing.service';
import { IPropertyBase } from '../../../models/IPropertyBase';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.scss'
})
export class PropertyListComponent implements OnInit {

  private housingService = inject(HousingService)
  private route = inject(ActivatedRoute)

  properties : Array<IPropertyBase> = [];
  sellRent = 1;

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.sellRent = 2;
    }

    this.housingService.getAllproperties(this.sellRent).subscribe(
      data => {
        this.properties = data;
        console.log(data);
      },
      error => {console.log(error)}
    )
  }
}
