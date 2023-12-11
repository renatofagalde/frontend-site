import {Title} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, DatePipe, registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';

import {ConfirmationService, MessageService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import {NaoAutorizadoComponent} from './nao-autorizado.component';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada.component';

import {LikwiHttp} from "../seguranca/likwi-http";
import {SiteService} from "../site/site.service";


registerLocaleData(localePt);

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,

        ConfirmDialogModule,
    ],
    declarations: [

        PaginaNaoEncontradaComponent,
        NaoAutorizadoComponent


    ],
    exports: [
        ConfirmDialogModule
    ],
    providers: [
        LikwiHttp,
        MessageService,
        Title,
        {provide: LOCALE_ID, useValue: 'pt'},

        SiteService,
        DatePipe
    ]
})

export class CoreModule {
}
