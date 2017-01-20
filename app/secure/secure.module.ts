import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

//Components
import { SecureComponent } from './secure.component';

//Services
import { CanActivateAuthGuard } from '../login/services/can-activate.service';

const routes:Routes = <Routes>[
    //{ path: 'secure', component: SecureComponent}     //BTW, this is what a normal route looks like
    {
        path: 'secure',
        component: SecureComponent,
        canActivate: [CanActivateAuthGuard],            //Guards: these check the user is logged in before accessing the route
        //canActivateChild: [CanActivateAuthGuard],     //Used if this module had child routes
    }
];

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [SecureComponent],
    providers: [],
})

export class SecureModule { }
