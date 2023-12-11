import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NaoAutorizadoComponent} from "./miscellaneous/nao-autorizado.component";
import {PaginaNaoEncontradaComponent} from "./miscellaneous/pagina-nao-encontrada.component";


const routes: Routes = [

  {path: 'site', loadChildren: ()=>import('./site/site.module').then(fn=>fn.SiteModule)},
  {path: '', redirectTo: 'site', pathMatch: 'full'},
  {path: 'nao-autorizado', component: NaoAutorizadoComponent},
  {path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
  {path: '**', redirectTo: 'pagina-nao-encontrada'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
