import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class='center'>
      <h1>error 404: not found</h1>
      
      <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
        Retourner a l'accueil 
      </a>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {

}
