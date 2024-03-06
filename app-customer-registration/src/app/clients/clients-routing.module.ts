import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: 'clients/home', component: HomeComponent, data: {title: 'Lista de Clientes'}},
  {path: 'clients', redirectTo:'clients/home', pathMatch:'full'},
  {path: '', redirectTo:'clients/home', pathMatch:'full'},
  {path: 'clients/create', component: CreateComponent, data: {title: 'Formulário de Cadastro'}},
  {path: 'clients/edit/:id', component: EditComponent, data: {title: 'Editar Cadastro'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
