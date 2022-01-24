import { Component } from '@angular/core';
import {NavigatorInterface, FooterInterface} from './core/models/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  public navigator: NavigatorInterface[] = [
    {
      name: 'home', 
      link: 'home',
    },
    {
      name: 'characters', 
      link: 'characters',
    },
    {
      name: 'teams', 
      link: 'teams',
    }
  ]

  public footer: FooterInterface = {
    creator: 'Sergio Pitel',
    from: 'upgrade hub'
  }
}
