import { Component, OnInit,HostListener, Inject} from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css',
              './main.css',
              './responsive.css',
]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
