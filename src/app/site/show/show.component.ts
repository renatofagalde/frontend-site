import { Component } from '@angular/core';
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {
  title = 'Estrutura padrão do site';

  constructor(private primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
    };
  }

}
