import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from "./Components/main-container/main-container.component";
import { LoginComponent } from './Components/login/login.component';
import { ProgramComponent } from './Components/program/program.component';
import { DocumentListComponent } from './Components/document-list/document-list.component';
import { FindAssignComponent } from './Components/find-assign/find-assign.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: MainContainerComponent },
  { path: 'program', component: ProgramComponent},
  { path: 'document-list', component: DocumentListComponent},
  { path: 'find-assign', component: FindAssignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
