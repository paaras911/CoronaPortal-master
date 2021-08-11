import { Component, Input, OnInit } from '@angular/core';

export interface CovidDataModel {
 incidents: string;
 recoveries: string;
 deaths: string;
}

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent {
  @Input() statistics:CovidDataModel = {incidents:'', recoveries:'', deaths:''};

}
