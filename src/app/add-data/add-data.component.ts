import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent 
{
 Id: string="";
  Name: string="";
  Department: string="";
  Year: string="";

  constructor(private dataService:DataService){}

  ngOnInit(): void {}

  onSubmit() {
    const formData = {
      Id: this.Id,
      Name: this.Name,
      Department: this.Department,
      Year: this.Year
    };
    this.dataService.addData(formData);
    this.clearForm();
  }
  clearForm() {
    this.Id = '';
    this.Name = '';
    this.Department = '';
    this.Year = '';
  }
}
