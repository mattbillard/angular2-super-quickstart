import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class Vehicle {
    constructor(public id: number, public name: string) { }
}

@Injectable()
export class VehicleService {
    constructor(private http: Http) { }

    //#1 HTTP
    getVehicles1() {
        return this.http
            .get('api/vehicles.json')
            .map((response: Response) => <Vehicle[]>response.json().data)
            .do(data => console.log(data))
            .catch(this.handleError1);
    }
    private handleError1(error: Response) {
        console.error(error);
        let msg = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(msg);
    }

    //#2 HTTP with Async Pipe
    getVehicles2(value?: string) {
        return this.http
            .get('api/vehicles.json')
            .map((response: Response) => {
                let vehicles = <Vehicle[]>response.json().data;
                if (!value) { return vehicles; }
                return vehicles.filter(v => v.name.toLowerCase().includes(value.toLowerCase()));
            })
            .do(data => console.log(data))
            .catch(this.handleError2);
    }
    private handleError2(error: Response) {
        console.error(error);
        let msg = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(msg);
    }

    //#3 HTTP with promises
    getVehicles3(value?: string) {
        return this.http.get('api/vehicles.json')
            .map((response: Response) => <Vehicle[]>response.json().data)
            .toPromise()
            .catch(this.handleError3);
    }
    private handleError3(error: Response) {
        console.error(error);
        let msg = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(msg);
    }
}
