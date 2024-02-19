import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { DisplayDataComponent } from './display-data/display-data.component';

const routes: Routes = [
  {path: '', redirectTo:'add-data', pathMatch: 'full' },
  {path:'add-data',component:AddDataComponent}, 
  {path: 'display-data', component:DisplayDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
