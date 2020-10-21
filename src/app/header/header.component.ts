import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="bg-dark">
      <h1 class="text-info">INFO</h1><h1 class="text-light">IMÓVEIS</h1>
    </header>
  `,
  styles: [
    'header { width: 100%; height: 200px; text-align: center; } h1{ position: relative; top:40px }'
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
