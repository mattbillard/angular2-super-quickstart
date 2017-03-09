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
    ) {}

    ngOnInit() {
        this.getVehicles1();
        this.getVehicles2();
        this.getVehicles3();
        this.getVehicles4();
        this.getVehicles5();
        this.getVehicles6();
    }


    //#1 HTTP + observable
    vehicles1: Vehicle[];
    errorMessage1: string;
    getVehicles1() {
        this.vehicleService.getVehicles1()
            .subscribe(
                vehicles => this.vehicles1 = vehicles,
                error =>  this.errorMessage1 = <any>error
            );
    }


    //#2 HTTP + observable + async pipe
    vehicles2: Observable<Vehicle[]>;
    getVehicles2() {
        this.vehicles2 = this.vehicleService.getVehicles2();
    }


    //#3 HTTP + promise
    vehicles3: Vehicle[];
    errorMessage3: string;
    getVehicles3() {
        this.vehicleService.getVehicles3().then(
            vehicles => this.vehicles3 = vehicles,
            error =>  this.errorMessage3 = <any>error
        );
    }


    //#4 HTTP + promise + async pipe
    vehicles4: Promise<Vehicle[]>;
    getVehicles4() {
        this.vehicles4 = this.vehicleService.getVehicles4();
    }


    //#5 Immediately resolved promise
    vehicles5: any;
    errorMessage5: string;
    getVehicles5() {
        this.vehicleService.getVehicles5().then(
            vehicles => this.vehicles5 = vehicles,
            error =>  this.errorMessage5 = <any>error
        );
    }


    //#6 SetTimeout promise
    vehicles6: any;
    errorMessage6: string;
    getVehicles6() {
        this.vehicleService.getVehicles6().then(
            vehicles => this.vehicles6 = vehicles,
            error =>  this.errorMessage6 = <any>error
        );
    }

}
