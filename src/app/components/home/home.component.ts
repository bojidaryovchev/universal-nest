import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home',
  template: `
    <h3>{{ title }}</h3>
    <img id="ngatl-logo" src="https://uploads-ssl.webflow.com/59f04de85aae0d0001bb95be/59f1a028ffa06300013b4d40_ngATL-logo.svg">
  `,
  styles: [`
    #ngatl-logo { width:500px; }
  `]
})
export class HomeComponent implements OnInit {
  public title: string;

  constructor() {}

  ngOnInit() {
    this.title = `This is the Homepage!`;

    setTimeout(() => {
      // ^ why is this bad?
      this.title = `We just updated the Title after a setTimeout of 5000 ms !`;
    }, 5000);
  }
}
