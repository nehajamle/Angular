import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{
private data: any[] = [];

  constructor() { }
  addData(item: any) {
    this.data.push(item);
  }

  getData(): any[] {
    return this.data;
  }
  
  updateData(index: number, updatedData: any) {
    this.data[index] = updatedData;
  }

  deleteData(index: number) {
    this.data.splice(index, 1);
  }
}
