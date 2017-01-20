import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ExampleComponent } from './components/example.component';
import { BasicComponent } from './basic.component';

//Services
import { ExampleService } from './services/example.service';

//Pipes
import { ExamplePipe } from './pipes/example.pipe';

const routes:Routes = <Routes>[
    { path: 'basic', component: BasicComponent }
];

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [
        BasicComponent,
        ExampleComponent,
        ExamplePipe,
    ],
    providers: [
        ExampleService,
    ],
})

export class BasicModule { }
