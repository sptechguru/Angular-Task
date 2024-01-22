

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './components/crud/crud.component';
import { ProfessionalsComponent } from './components/professionals/professionals.component';

const routes: Routes = [
  { path: 'crud', component: CrudComponent },
  { path: 'pro', component: ProfessionalsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }