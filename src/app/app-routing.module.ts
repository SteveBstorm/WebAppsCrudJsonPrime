import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path : '', redirectTo : 'list', pathMatch :'full'},
  {path : "list", component : ListComponent},
  {path : 'create', component : CreateComponent},
  {path : 'detail/:id', component : DetailComponent},
  {path : 'update/:id', component : UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
