import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DataViewComponent } from './data-view/data-view.component';
import { MaterialModule } from './material-module';

const routes: Routes = [
  { path: 'data-view', component: DataViewComponent }
];
// configures NgModule imports and exports
@NgModule({
  imports: [MaterialModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }