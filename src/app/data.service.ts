import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CovidCasesData, CovidDeathData, CovidRecoveryData } from "./Models/data.model";

@Injectable({
  providedIn: "root"
})
export class OrganizationService {
  private recoveredUrl = `${environment.apiBaseUrl}/germany/history/recovered/`;
  private incidentsUrl = `${environment.apiBaseUrl}/germany/history/incidence/`;
  private deathsUrl = `${environment.apiBaseUrl}/germany/history/deaths/`;

  constructor(private http: HttpClient) {}

  public getCases(number: any): Observable<CovidCasesData> {
    return this.http.get<CovidCasesData>(this.incidentsUrl+number);
  }

  public getDeaths(number: any): Observable<CovidDeathData> {
    return this.http.get<CovidDeathData>(this.deathsUrl+number);
  }

  public getRecovered(number: any): Observable<CovidRecoveryData> {
    return this.http.get<CovidRecoveryData>(this.recoveredUrl+number);
  }

}