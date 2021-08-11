import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {map } from "rxjs/operators"
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root"
})
export class OrganizationService {
  private baseUrl = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient) {}

  public getCases(number: number, state:string): Observable<any> {
    return this.http.get<any>(this.baseUrl+state+"/history/cases/"+number);
  }

  public getDeaths(number: number, state:string): Observable<any> {
    return this.http.get<any>(this.baseUrl+state+"/history/deaths/"+number);
  }

  public getRecovered(number: number, state:string): Observable<any> {
    return this.http.get<any>(this.baseUrl+state+"/history/recovered/"+number);
  }

}