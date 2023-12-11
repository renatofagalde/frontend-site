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
import {PaginaNaoEncontradaComponent} from "./miscellaneous/pagina-nao-encontrada.component";
import {NaoAutorizadoComponent} from "./miscellaneous/nao-autorizado.component";
import {CoreModule} from "./miscellaneous/core.module";



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        StyleClassModule,
        CoreModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
