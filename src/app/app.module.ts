import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './modules/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { WindowService } from './services/window/window.service';

// For AoT compilation:
export function getWindow() {
  return window;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({appId: 'my-app'}),
    TransferHttpCacheModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'speakers', loadChildren: './modules/speakers/speakers.module#SpeakersModule'}
    ]),
    SharedModule
  ],
  providers: [
    {
      provide: WindowService,
      useFactory: getWindow
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
