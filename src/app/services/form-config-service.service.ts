import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormConfigServiceService {
  //readonly BASEURL = 'https://s3.amazonaws.com/dev.appseed.io/mobile-apps/demo-angular-dynamic-forms/';
  readonly BASEURL = '../assets/json-forms/';
  constructor(private http: HttpClient) { }

  public getFormConfig(filename) {    
    return this.http.get(this.BASEURL + filename).pipe(map((res:any) => res));
  }

}
