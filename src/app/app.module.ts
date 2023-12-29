import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StyleClassModule} from "primeng/styleclass";
import {CoreModule} from "./miscellaneous/core.module";
import {SiteService} from "./site/site.service";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        StyleClassModule,
        CoreModule,
    ],
    providers: [SiteService],
    bootstrap: [AppComponent]
})
export class AppModule {
}