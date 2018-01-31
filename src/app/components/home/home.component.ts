import { AfterViewInit, Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';
import { WindowService } from '../../services/window/window.service';

import * as $ from 'jquery';

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
export class HomeComponent implements OnInit, AfterViewInit {

  public title: string;
  public isBrowser: boolean = isPlatformBrowser(this.platformId);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private doc,
    private windowService: WindowService
  ) {

  }

  ngOnInit() {
    this.title = `This is the Homepage!`;

    this.doc.getElementById('ngatl-logo').style.display = 'none';

    console.log('window service');
    console.log(this.windowService);

    // Now it runs conditionally - so we don't delay our SSR!
    if (this.isBrowser) {
      setTimeout(() => {
        this.title = `We just updated the Title after a setTimeout of 5000 ms !`;
      }, 5000);

      // Notice this works !
      window.addEventListener('click', () => { console.log('huh'); }, false);

    }

  }

  ngAfterViewInit() {
    this.somethingCrazyWithjQuery();
  }

  private somethingCrazyWithjQuery() {
    if (this.isBrowser) {
      // $('body').hide();
    }
  }
}
