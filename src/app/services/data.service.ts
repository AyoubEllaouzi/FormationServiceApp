import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSubject = new BehaviorSubject<string>('');

  constructor() { }

  updateData(data: string) {
    console.log("server ",data);
    this.dataSubject.next(data);
  }
  getData() {
   return this.dataSubject;
  }
}
