import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

//Components
import { HttpComponent } from './http.component';

//Services
import { VehicleService } from './services/vehicle.service';

const routes:Routes = <Routes>[
    { path: 'http', component: HttpComponent }
];

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [HttpComponent],
    providers: [VehicleService],
})
export class HttpExamplesModule { }
