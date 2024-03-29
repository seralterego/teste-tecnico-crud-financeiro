import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.css']
})
export class TabNavComponent {
  items: any[] = [
    {name: 'Cadastro', link: '/clients/create'},
    {name: 'Lista', link: '/clients/home', active: true},
  ];

  selectedIndex = 0;
  setActiveClass(index: number) {
    this.selectedIndex = index;
  }

  constructor() {}
}
