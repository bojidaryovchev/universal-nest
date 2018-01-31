import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpeakersService {
  constructor(
    private http: HttpClient
  ) {}

  getSpeakers() {
    return this.http.get<any[]>('http://localhost:4000/api/speakers');
  }
}
