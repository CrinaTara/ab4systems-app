import { Injectable } from '@angular/core';
import { Headers, Http ,HttpModule, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DevelopersService {

  private URL: string = "https://api.stackexchange.com";
  
  headers: Headers;
  private options;

  constructor(private _http: Http) { 
  }

  setHeaders() {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    // this.headers.append('Access-Control-Allow-Origin', '*');
    this.options = new RequestOptions({ headers: this.headers });

  }
  // getDevelopers() {
  //   this.setHeaders();
  //   return this._http.get(this.URL + "/2.2/users?order=desc&sort=reputation&site=stackoverflow")
  //     .map((response: Response) => response.json())
  //     .catch(this._errorHandler);

  // }

  getDevelopers(nrPage) {
    this.setHeaders();
    return this._http.get(this.URL + "/2.2/users?page="+nrPage+"&pagesize=15&order=desc&sort=reputation&site=stackoverflow")
      .map((response: Response) => response.json())
      .catch(this._errorHandler);

  }
  getDeveloper(id){
    console.log(id);
    return this._http.get(this.URL + "/2.2/users/"+id+"?order=desc&sort=reputation&site=stackoverflow")
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

  sort(type){
    return this._http.get(this.URL + "/2.2/users?order="+type+"&sort=name&site=stackoverflow")
    .map((response: Response) => response.json())
    .catch(this._errorHandler);
  }

  searchByName(name){
    return this._http.get(this.URL + "/2.2/users?order=desc&sort=reputation&inname="+name+"&site=stackoverflow")
    .map((response: Response) => response.json())
    .catch(this._errorHandler);
  }

  
  _errorHandler(error: Response) {
    // console.error(error);
    return Observable.throw(error || "Server Error");
  }

}
