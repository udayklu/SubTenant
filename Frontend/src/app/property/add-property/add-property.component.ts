import { Component } from '@angular/core';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.scss'
})
export class AddPropertyComponent {

  onFormSubmitted($event : any) {
    console.log("congrats, form submitted  !!", $event)
  }
}
