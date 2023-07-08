import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { RestaurantdashComponent } from './Components/restaurantdash/restaurantdash.component';
import { MaterialComponent } from './Components/material/material.component';
import { AuthGuard } from 'src/shared/auth.guard';
import { AboutComponent } from './Components/about/about.component';

const routes: Routes = [
  {path: '', redirectTo:'signup',pathMatch:'full'},
 // {path: '**', redirectTo: 'signup', pathMatch:'full'},
  {path:'login',component:LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'restaurant', component: RestaurantdashComponent,canActivate:[AuthGuard] },
  { path: 'restaurant/about', component: AboutComponent },
  { path: 'material', component: MaterialComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
