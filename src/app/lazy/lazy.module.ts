import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

//Components
import { LazyComponent } from './lazy.component';

const routes:Routes = <Routes>[
  //{ path: 'lazy', component: LazyComponent }
  {path: '', component: LazyComponent}  //NOTE: path is empty. For lazy modules, it is specified in the parent module.
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [LazyComponent],
  providers: [],
})

export class LazyModule {}
