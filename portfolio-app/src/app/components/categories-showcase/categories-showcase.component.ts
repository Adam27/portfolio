import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination, EffectFade, Autoplay  } from 'swiper';

SwiperCore.use([Pagination, EffectFade, Autoplay]);

@Component({
  selector: 'categories-showcase',
  templateUrl: './categories-showcase.component.html',
  styleUrls: ['./categories-showcase.component.scss']
})
export class CategoriesShowcaseComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1,
    navigation: false,
    effect: 'fade',
    speed: 1200,
    fadeEffect: {
      crossFade: false
    },
    autoplay: {
      delay: 3000
    },
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  constructor() { }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  ngOnInit(): void {
  }

}
