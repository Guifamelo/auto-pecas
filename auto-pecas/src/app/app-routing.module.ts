import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SobrenosComponent} from './sobrenos/sobrenos.component';
import {CarrinhoComponent} from './carrinho/carrinho.component';
import {ContatoComponent} from './contato/contato.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'sobrenos', component: SobrenosComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'contato', component: ContatoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
