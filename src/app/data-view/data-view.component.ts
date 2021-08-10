import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CovidCasesData, CovidDeathData, CovidRecoveryData } from '../Models/data.model';

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
  
  public week!:number;

  constructor(private route: ActivatedRoute){
   
  
  }


}
