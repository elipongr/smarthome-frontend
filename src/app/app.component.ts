import {Component, OnInit} from '@angular/core';
import {LedService} from './led.service';
import {timer} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  leds = [];
  marks = {
    0: '0',
    250: '250',
  };

  marksSensor = {
    0: '0',
    300: '300',
  };


  constructor(private ledService: LedService) {

  }

  ngOnInit(): void {
    this.ledService.getLeds().subscribe((res: any[]) => {
      this.leds = res;
    });
  }

  updateLeds() {
    this.ledService.updateLeds(this.leds).subscribe();
  }
}
