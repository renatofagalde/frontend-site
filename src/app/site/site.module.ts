import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {ShowComponent} from './show/show.component';
import {AvatarModule} from "primeng/avatar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import {CheckboxModule} from "primeng/checkbox";
import {PanelModule} from "primeng/panel";
import {SiteRoutingModule} from "./site-routing.module";


@NgModule({
  declarations: [
    ShowComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    SiteRoutingModule,
    StyleClassModule,
    RippleModule,
    ButtonModule,
    CheckboxModule,
    PanelModule,
    AvatarModule
  ]
})
export class SiteModule { }
