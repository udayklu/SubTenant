import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../../models/IProperty';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.scss'
})
export class AddPropertyComponent implements OnInit{
  @ViewChild('formTabs') staticTabs?: TabsetComponent;

  constructor(private fb: FormBuilder){}
  addPropertyForm: FormGroup;

  propertyTypes : Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes : Array<string> = ['Semi', 'Full', 'Unfurnished'];
  directions : Array<string> = ['East', 'West', 'North', 'South'];

  propertyView : IProperty = {Id: 0, SellRent: 0, Name: '', PropertyType: '', Price: 0, Image: '', BHK: 0, BuiltArea: 0, City: '',  FurnitureType: '', RTM: 0, Address: '', Address2: '', Address3: '', AOP: 0, Bathrooms: 0, CarpetArea: 0, Description: '', FloorNo: 0, Gated: 0, MainEntrance: '', Maintenance: 0, Posession: '', PostedOn: '', Security: 0, TotalFloor: 0 };

  ngOnInit(): void {
    this.CreateAddPropertyForm();
  }
  
  onFormSubmitted() {
    console.log("congrats, form submitted  !!")
    console.log(this.addPropertyForm)

  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
        SellRent: [null, Validators.required],
        PropertyType: [null, Validators.required],
        Name: [null, Validators.required],
        BHK: [null, Validators.required],
        FurnitureType: [null, Validators.required],
        City: [null, Validators.required]
      }),
      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        Security: [null, Validators.required],
        Maintenance: [null, Validators.required],
        BuiltArea: [null, Validators.required],
        CarpetArea: [null, Validators.required],
      }),
      AddressInfo: this.fb.group({
        FloorNo: [null, Validators.required],
        TotalFloor: [null, Validators.required],
        Address: [null, Validators.required],
        Address2: [null, Validators.required],
        Address3: [null, Validators.required],
        Landmark: [null, Validators.required]
      }),
      OtherDetails: this.fb.group({
        Posession: [null, Validators.required],
        PostedOn: [null, Validators.required],
        AOP: [null, Validators.required],
        Gated: [null, Validators.required],
        MainEntrance: [null, Validators.required],
        Description: [null, Validators.required]
      })
    });
  }

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
}
