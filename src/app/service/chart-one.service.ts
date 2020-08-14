import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChartOneService {

  apiURL = "http://localhost:8080/live-project/";

  constructor(private _http:HttpClient) { }

  graphOne(url):Observable<any>{
    return this._http.get<any>(this.apiURL+ url)
  }
}
