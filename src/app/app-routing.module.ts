import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent,title:"home"
  },
  {
    path:'about',component:AboutComponent,title:"about"
  },
  {
    path:'portofolio',component:PortofolioComponent,title:"portoFolio"
  },
  {
    path:'contact',component:ContactComponent,title:"contact"
  },
  {
    path:"",redirectTo:"home",pathMatch:"full"
  },
  {
    path:"**",redirectTo:"home"
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,scrollPositionRestoration:"enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
