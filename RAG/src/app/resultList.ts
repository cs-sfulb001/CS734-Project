import {Injectable} from '@angular/core';
import {result} from './result';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  protected housingLocationList: result[] = [
    {
        id: 0;
        title: string;
        summary: string;
        content: string;
    },
    {
        id: 0;
        title: string;
        summary: string;
        content: string;
    },
    {
        id: 0;
        title: string;
        summary: string;
        content: string;
    },
    {
        id: 0;
        title: string;
        summary: string;
        content: string;
    },
    {
        id: 0;
        title: string;
        summary: string;
        content: string;
    },
  ];
  getAllHousingLocations(): HousingLocationInfo[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id: number): HousingLocationInfo | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }
}