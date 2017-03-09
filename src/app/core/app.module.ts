import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import './config/rxjs-extensions';

//App
import { AppComponent } from './app.component';

//Modules
import { BasicModule } from '../basic/basic.module';
import { HttpExamplesModule } from '../http/http.module';
import { LoginModule } from '../login/login.module';
import { NestedModule } from '../nested/nested.module';
import { SecureModule } from '../secure/secure.module';
//import { LazyModule } from '../lazy/module/lazy.module';      //NOTE: LazyModule is not loaded

//Components
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FooComponent } from './views/foo/foo.component';
import { BarComponent } from './views/bar/bar.component';
import { BazComponent } from './views/baz/baz.component';

const routes:Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/foo'},                    //Default route
  {path: 'foo', component: FooComponent},
  {path: 'bar', component: BarComponent},
  {path: 'baz', component: BazComponent},
  {path: 'lazy', loadChildren: 'app/lazy/lazy.module#LazyModule'},      //Lazy loaded module. NOTE: LazyModule routes are here on parent.
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

    BasicModule,
    HttpExamplesModule,
    LoginModule,
    NestedModule,
    SecureModule,
  ],
  exports: [],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FooComponent,
    BarComponent,
    BazComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
