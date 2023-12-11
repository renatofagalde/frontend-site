import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';


import {ErrorHandlerService} from './../../core/error-handler.service';
import {AuthService} from './../auth.service';
import {Title} from "@angular/platform-browser";
import {MessageService} from "primeng/api";
import {DeviceDetectorService} from "ngx-device-detector";
import {ConnectionService} from "ng-connection-service";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    validado: boolean = false;
    blocked: boolean;

    statusConexao: string = "Online";
    statusIsConnected: Boolean = true;

    constructor(private auth: AuthService,
                private errorHandler: ErrorHandlerService,
                private router: Router,
                public title: Title,
                private connectionService: ConnectionService,
                private messageService: MessageService,
                public deviceService: DeviceDetectorService) {

        this.connectionService.monitor().subscribe(statusIsConnected => {
            this.statusIsConnected = statusIsConnected;
            if (this.statusIsConnected) {
                this.statusConexao = "Online";
                this.messageService.add({severity: 'success', detail: this.statusConexao});
            } else {
                this.statusConexao = "Offline";
                this.messageService.add({severity: 'error', detail: this.statusConexao});
            }
        });

    }

    ngOnInit() {
        this.title.setTitle(`${environment.title} - Login`);
    }

    login(usuario: string, senha: string) {

        this.blocked = true;
        this.auth.login(usuario, senha)
            .then(() => {
                // this.messageService.add({severity: 'error', summary: "ATENÇÃO", detail: 'manutencao'});
                this.router.navigate(['/inicio']);
            })
            .catch(erro => {
                this.messageService.add({severity: 'error', summary: "ATENÇÃO", detail: 'Verifique seus dados'});
            })
            .finally(() => {
                this.blocked = !this.blocked;
            })


    }

    usuarioValidado(event) {
        this.validado = true;
    }

}
