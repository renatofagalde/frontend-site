import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {SiteService} from "../site.service";
import {Title} from "@angular/platform-browser";
import {Site} from "../site";


@Component({
    selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

    site!: any;

    constructor(private primengConfig: PrimeNGConfig, private service: SiteService, public title: Title) {
    }

    ngOnInit() {
        this.primengConfig.zIndex = {
            modal: 1100,    // dialog, sidebar
            overlay: 1000,  // dropdown, overlaypanel
            menu: 1000,     // overlay menus
            tooltip: 1100   // tooltip
        };

        this.service.get().subscribe((response: {}) => {
            this.site = response;
            this.title.setTitle(this.site.bannerTitle);
        })
    }

}
