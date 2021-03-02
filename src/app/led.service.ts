import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LedService {

  constructor(private http: HttpClient) {
  }

  getLeds() {
    return this.http.get(environment.baseUrl + 'leds');
  }

  updateLeds(leds) {
    return this.http.post(environment.baseUrl + 'leds', leds);
  }


}
