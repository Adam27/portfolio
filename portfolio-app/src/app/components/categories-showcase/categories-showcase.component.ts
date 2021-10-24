import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Pagination  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'categories-showcase',
  templateUrl: './categories-showcase.component.html',
  styleUrls: ['./categories-showcase.component.scss']
})
export class CategoriesShowcaseComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
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
