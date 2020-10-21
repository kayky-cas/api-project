import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <app-header></app-header>
    <app-nav></app-nav>
    <h1 class="text-danger">ERRO 404</h1>
    <h1 class="text-dark">Página não encontrada</h1>
    <app-footer></app-footer>

  `,
  styles: [
    'h1{text-align:center}'
  ]
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
