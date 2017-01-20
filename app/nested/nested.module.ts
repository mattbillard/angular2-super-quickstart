import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

//Components
import { NestedComponent } from './nested.component';
import { DetailComponent } from './views/detail/detail.component';
import { ListComponent } from './views/list/list.component';

//Services
import { CharacterService } from './services/character.service';

const routes:Routes = <Routes>[
    //{ path: 'nested', component: NestedComponent }     //BTW, this is what a normal route looks like
    {
        path: 'nested',
        component: NestedComponent,
        children: [
            { path: '', component: ListComponent },
            { path: ':id', component: DetailComponent },
        ]
    }
];

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [
        NestedComponent,
        DetailComponent,
        ListComponent,
    ],
    providers: [
        CharacterService,
    ],
})
export class NestedModule { }
