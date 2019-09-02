import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatinentenListeComponent } from './patinenten-liste/patinenten-liste.component';


const routes: Routes = [
  {path: '', component: PatinentenListeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
