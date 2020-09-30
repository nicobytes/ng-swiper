import { Component, AfterContentInit } from '@angular/core';
import Swiper from 'swiper/bundle';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'ng-swiper';
  swiper: Swiper;

  ngAfterContentInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      updateOnWindowResize: true,
      loop: true
    });
  }

  next(): void {
    this.swiper.slideNext();
  }

  prev(): void {
    this.swiper.slidePrev();
  }
}
