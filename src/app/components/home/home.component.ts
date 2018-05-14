import { AfterViewInit, Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';
import { WindowService } from '../../services/window/window.service';

@Component({
  selector: 'home',
  template: `
    <h3>(Third party library) Dragula Example</h3>
    <div *ngIf="isBrowser" class='wrapper'>
      <div class='container'>
        <div>You can move these elements between these two containers</div>
        <div>Moving them anywhere else isn't quite possible</div>
        <div>There's also the possibility of moving elements around in the same container, changing their position</div>
      </div>
      <div class='container'>
        <div>This is the default use case. You only need to specify the containers you want to use</div>
        <div>More interactive use cases lie ahead</div>
        <div>Make sure to check out the <a href='https://github.com/bevacqua/dragula#readme'>documentation on GitHub!</a></div>
      </div>
    </div>
  `,
  styles: [`
    #ngatl-logo { width:500px; }
  `]
})
export class HomeComponent implements OnInit {

  public title: string;
  public isBrowser: boolean = isPlatformBrowser(this.platformId);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private doc,
    private windowService: WindowService
  ) { }

  ngOnInit() {
    this.title = `This is the Homepage!`;
  }
}
