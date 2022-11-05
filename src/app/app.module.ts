import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PagerrorComponent } from './pagerror/pagerror.component';
import { CustomStyleDirective } from './admin/custom-style.directive';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    PagerrorComponent,
    CustomStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
