import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap, toArray } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllproperties() : Observable<IProperty[]>{
    return this.http.get('assets/data/properties.json').pipe(
      map((list)  => {
        const propertiesArray : Array<IProperty> = [];

        for(const id in list as IProperty[]){
          if(list.hasOwnProperty(id)){
            console.log(list as IProperty[])
            propertiesArray.push(JSON.parse(JSON.stringify(list.toString()))[id]);
          }
        }
        return propertiesArray;
      }) 
    )
  }
}

