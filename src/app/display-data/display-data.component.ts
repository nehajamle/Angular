import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent 
{
  data: any[];
  editing: boolean[];

  constructor(private dataService:DataService)
  {
    this.data = this.dataService.getData();
    this.editing = new Array(this.data.length).fill(false);
  }

  edit(index: number) 
  {
    this.editing[index] = true;
  }
  save(index: number)
  {
    this.editing[index] = false;
    this.dataService.updateData(index, this.data[index]);
  }
  delete(index: number) 
  {
    this.dataService.deleteData(index);
    this.editing.splice(index, 1);
  }

}
