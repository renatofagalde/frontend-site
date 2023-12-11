import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";
import {PanelModule} from "primeng/panel";
import {StyleClassModule} from "primeng/styleclass";
import {RippleModule} from "primeng/ripple";
import {AvatarModule} from "primeng/avatar";
import {Routes} from "@angular/router";

const routes: Routes = [

    {path: 'site', loadChildren: 'app/inicio/inicio.module#InicioModule'},
    {path: '', redirectTo: 'site', pathMatch: 'full'},
    {path: 'nao-autorizado', component: NaoAutorizadoComponent},
    {path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
    {path: '**', redirectTo: 'pagina-nao-encontrada'}
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        StyleClassModule,
        RippleModule,
        ButtonModule,
        CheckboxModule,
        PanelModule,
        AvatarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
