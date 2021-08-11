import { Component, EventEmitter, Output } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'; 
import { CovidDataModel } from './data-view/data-view.component';
import { OrganizationService } from './data.service';
import { states } from './states.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CoronaPortal';
  covidStats: CovidDataModel={incidents:'', recoveries:'', deaths:''};
  weekSelected!: number ;
  stateSelected!: string;
  states = states;
  dataSelected = true;

  weeks: any[] =[
    {label: "1 week", duration: 7}, 
    {label: "2 weeks", duration: 14},
    {label: "3 weeks", duration: 21},
    {label: "4 weeks", duration: 28}
  ];
 


 constructor(private covidService:OrganizationService){}
      

 getCovidData(){
   if(!this.weekSelected||!this.stateSelected){
     this.dataSelected=false;
   }
   else {
    this.dataSelected=true;
   this.getIncidentData();
   this.getRecoveryData();
   this.getDeathData();
   }
 }

  getIncidentData(){
    let totalCases = 0;
    this.covidService.getCases(this.weekSelected,this.stateSelected).subscribe(stat =>{
      stat.data[this.stateSelected].history.forEach((_cases:any) => {
           totalCases+=_cases.cases;
      });
      this.covidStats.incidents=totalCases.toString();
    })
  }

  getRecoveryData(){
    let totalrecoveries = 0;
    this.covidService.getRecovered(this.weekSelected,this.stateSelected).subscribe(stat =>{
      stat.data[this.stateSelected].history.forEach((_cases:any) => {
        totalrecoveries+=_cases.recovered;
      });
      this.covidStats.recoveries=totalrecoveries.toString();
    })
}

  getDeathData(){
    let totaldeaths= 0;
    this.covidService.getDeaths(this.weekSelected,this.stateSelected).subscribe(stat =>{
      stat.data[this.stateSelected].history.forEach((_cases:any) => {
        totaldeaths+=_cases.deaths;
      });
      this.covidStats.deaths=totaldeaths.toString();
    
    })
  }
}
