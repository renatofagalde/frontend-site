import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowComponent} from './show/show.component';
import {AvatarModule} from "primeng/avatar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CheckboxModule} from "primeng/checkbox";
import {PanelModule} from "primeng/panel";
import {SiteRoutingModule} from "./site-routing.module";
import {AppRoutingModule} from "../app-routing.module";


@NgModule({
  declarations: [
    ShowComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    SiteRoutingModule,
    BrowserAnimationsModule,
    StyleClassModule,
    RippleModule,
    ButtonModule,
    CheckboxModule,
    PanelModule,
    AvatarModule
  ]
})
export class SiteModule { }
