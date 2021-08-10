import { Component, EventEmitter, Output } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'; 
import { CovidDataModel } from './data-view/data-view.component';
import { OrganizationService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CoronaPortal';
  covidStats: CovidDataModel={incidents:'', recoveries:'', deaths:''};
  weekNumber: number = 0;
  weeks: any[] =[
    {label: "1 week", duration: 7}, 
    {label: "2 weeks", duration: 14},
    {label: "3 weeks", duration: 21},
    {label: "4 weeks", duration: 28}
  ];
  
 constructor(private router:Router, private covidService:OrganizationService){

 }

 getData(number:any){
   this.weekNumber = number.value;
   this.getIncidentData();
   this.getRecoveryData();
   this.getDeathData();
   
 }

  getIncidentData(){
    let totalCases = 0;
    this.covidService.getCases(this.weekNumber).subscribe(stat =>{
      stat.data.forEach(element => {
           totalCases+=element.weekIncidence;
      });
      this.covidStats.incidents=totalCases.toString();
      console.log("totalCases"+totalCases);
    })
  }

  getRecoveryData(){
    let totalrecoveries = 0;
    this.covidService.getRecovered(this.weekNumber).subscribe(stat =>{
      stat.data.forEach(element => {
        totalrecoveries+=element.recovered;
      });
      this.covidStats.recoveries=totalrecoveries.toString();
      console.log("totalrecoveries"+totalrecoveries);
    })
  }

  getDeathData(){
    let totaldeaths= 0;
    this.covidService.getDeaths(this.weekNumber).subscribe(stat =>{
      stat.data.forEach(element => {
        totaldeaths+=element.deaths;
      });
      this.covidStats.deaths=totaldeaths.toString();
      console.log("totaldeaths"+totaldeaths);
    })
  }
}
