import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: DefaultLayoutComponent, children:[
      {
        path: '', component: HomeComponent
      }
    ]
  },
  {
    path: 'admin', component: DefaultLayoutComponent, children:[
      { 
        path: '',component: AdminComponent
      }
    ]
  },
  {
    path: '**', component: PageNotFoundComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
