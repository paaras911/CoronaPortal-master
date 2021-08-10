import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DataViewComponent } from './data-view/data-view.component';

const routes: Routes = [
  { path: 'data-view/:week', component: DataViewComponent }
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }