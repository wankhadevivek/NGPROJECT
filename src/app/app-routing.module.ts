import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PagerrorComponent } from './pagerror/pagerror.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'user',component:UserComponent},
  {path:'admin',component:AdminComponent},
  {path:'**',component:PagerrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
