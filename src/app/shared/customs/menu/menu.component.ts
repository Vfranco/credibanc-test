import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  host: {
    class: 'menu'
  }
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
