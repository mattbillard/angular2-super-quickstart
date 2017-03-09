import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class Vehicle {
  constructor(public id:number, public name:string) {
  }
}


let mockResponse = [
  {"id": 30, "name": "Millennium Falcon", "type": "space"},
  {"id": 32, "name": "X-Wing Fighter", "type": "space"},
  {"id": 33, "name": "Imperial Star Destroyer", "type": "space"},
  {"id": 34, "name": "AT-AT Walker", "type": "land"}
];

@Injectable()
export class VehicleService {
  constructor(private http:Http) {
  }


  //#1 HTTP + observable
  getVehicles1() {
    return this.http
      .get('api/vehicles.json')
      .map((response:Response) => <Vehicle[]>response.json().data)
      //.do(data => console.log(data))
      .catch(this.handleError);
  }


  //#2 HTTP + observable + async pipe
  getVehicles2() {
    return this.http
      .get('api/vehicles.json')
      .map((response:Response) => <Vehicle[]>response.json().data)
      //.do(data => console.log(data))
      .catch(this.handleError);
  }


  //#3 HTTP + promise
  getVehicles3() {
    return this.http.get('api/vehicles.json')
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }


  //#4 HTTP + promise + async pipe
  getVehicles4() {
    return this.http.get('api/vehicles.json')
      .map((response:Response) => <Vehicle[]>response.json().data)
      .toPromise()
      .catch(this.handleError);
  }


  //#5 Immediately resolved promise
  getVehicles5() {
    return Promise.resolve(mockResponse);
  }


  //#6 SetTimeout promise
  getVehicles6() {
    return new Promise(resolve => {
      setTimeout(() => resolve(mockResponse), 3000);
    });
  }


  private handleError(error:Response) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }
}
