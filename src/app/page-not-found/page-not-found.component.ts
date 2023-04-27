import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class='center'>
      <h1>404 : hallah not found</h1>
      <p> nan je dec il existe pas le boug<p>
      
      <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
        Retourne d'ou tu viens
      </a>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {

}
