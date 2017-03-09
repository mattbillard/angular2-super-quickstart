import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

//Components
import { LoginComponent } from './login.component';

//Services
import { CanActivateAuthGuard } from './services/can-activate.service';
import { UserProfileService } from './services/user-profile.service';

const routes:Routes = <Routes>[
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    LoginComponent,
  ],
  providers: [
    CanActivateAuthGuard,
    UserProfileService,
  ],
})

export class LoginModule {}
