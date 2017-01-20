import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Vehicle, VehicleService } from './services/vehicle.service';

@Component({
    moduleId: module.id,
    selector: 'http',
    templateUrl: 'http.component.html',
})
export class HttpComponent implements OnInit {

    constructor(
        private vehicleService: VehicleService
    ) {
    }

    ngOnInit() {
        this.getVehicles1();                                             //#1 HTTP
        this.getVehicles2();                                             //#2 HTTP with Async Pipe
        this.getVehicles3();                                             //#3 HTTP with promises
    }

    //#1 HTTP
    vehicles1: Vehicle[];
    errorMessage1: string;
    getVehicles1() {
        this.vehicleService.getVehicles1()
            .subscribe(
                vehicles => this.vehicles1 = vehicles,
                error =>  this.errorMessage1 = <any>error
            );
    }

    //#2 HTTP with Async Pipe
    vehicles2: Observable<Vehicle[]>;
    getVehicles2(value?: string) {
        this.vehicles2 = this.vehicleService.getVehicles2(value);
    }

    //#3 HTTP with promises
    vehicles3: Promise<Vehicle[]>;
    getVehicles3(value?: string) {
        this.vehicles3 = this.vehicleService.getVehicles3(value);
    }
}
