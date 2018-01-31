import { Component, OnInit } from '@angular/core';
import { SpeakersService } from './speakers.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-speakers-list',
  template: `
    <h3>Speakers</h3>
    <!-- get the speakers and display them here -->
    {{ speakers | async | json }}
  `,
  styles: []
})
export class SpeakersListComponent implements OnInit {

  speakers: Observable<any[]>;

  constructor(
    private speakersService: SpeakersService
  ) {
    this.speakers = this.speakersService.getSpeakers();
  }

  ngOnInit() { }

}
