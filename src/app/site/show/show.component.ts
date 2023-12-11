import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {SiteService} from "../site.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit{
  title: string | undefined = 'Estrutura padrão do site';

  constructor(private primengConfig: PrimeNGConfig,private service: SiteService) {
  }

  ngOnInit() {
    console.log("init")
    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
    };

    this.service.get().then(site=>{
      this.title=site.title;
      console.log(this.title);
    });
  }

}
