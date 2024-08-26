import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap, toArray } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllproperties(sellRent: number) : Observable<IProperty[]>{
    return this.http.get<IProperty[]>('assets/data/properties.json').pipe(
      map((list)  => {
        const propertiesArray : Array<IProperty> = [];

        list.forEach((item, index) => {
          if(list.hasOwnProperty(index) && item.SellRent === sellRent){
            propertiesArray.push(item);
          }
        });
        // for(const id in list as IProperty[]){
        //   if(list.hasOwnProperty(id)){
        //     propertiesArray.push(JSON.parse(JSON.stringify(list.toString()))[id]);
        //   }
        // }
        return propertiesArray;
      }) 
    )
  }
}

