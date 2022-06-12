import { Component, OnInit, ViewEncapsulation, ViewChild, Input } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-album-swiper',
  templateUrl: './album-swiper.component.html',
  styleUrls: ['./album-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlbumSwiperComponent implements OnInit {
  @Input() album:any;
  constructor() { }

  ngOnInit(): void {
  }

}
