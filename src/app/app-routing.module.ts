import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCompteComponent } from './components/detail-compte/detail-compte.component';
import { ListComptesComponent } from './components/list-comptes/list-comptes.component';
import { OperationsComponent } from './components/operations/operations.component';


const routes: Routes = [
  {
    path: "operations",
    component: OperationsComponent
  },
  {
    path: "comptes",
    component: ListComptesComponent
  },
  {
    path: "detail-compte",
    component: DetailCompteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
