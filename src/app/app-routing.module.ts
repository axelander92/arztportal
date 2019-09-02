import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientListComponent } from './patient-list/patient-list.component';
import { LoginComponent } from './login/login.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'patienten', component: PatientListComponent},
  { path: 'login', component: LoginComponent },
  { path: 'detail/:address', component: PatientDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
