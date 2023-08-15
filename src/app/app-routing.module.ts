import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { UPDATERestaurantComponent } from './update-restaurant/update-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { AboutComponent } from './about/about.component';
import { MuneComponent } from './mune/mune.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'add-item', component:AddRestaurantComponent,canActivate: [AuthGuard]},
  {path:'update-item/:id', component:UPDATERestaurantComponent,canActivate: [AuthGuard]},
  {path:'list-item', component:ListRestaurantComponent,canActivate: [AuthGuard]},
  {path:'about', component:AboutComponent},
  {path:'mune', component: MuneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
