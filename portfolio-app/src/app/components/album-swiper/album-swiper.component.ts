import { Component, OnInit, ViewEncapsulation, Input, ViewChild, AfterViewInit, Output, EventEmitter } from "@angular/core";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-album-swiper',
  templateUrl: './album-swiper.component.html',
  styleUrls: ['./album-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlbumSwiperComponent implements OnInit, AfterViewInit {
  @Input() album:any;
  @Input() initialSwiperIndex:any;
  @Input() viewportDimensions:any;
  @Output() closeEvent = new EventEmitter();
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  constructor() { }

  close(){
    this.closeEvent.emit();
  }

  prev(){
    this.swiper!.swiperRef.slidePrev();
  }
  next(){
    this.swiper!.swiperRef.slideNext();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.swiper!.swiperRef.slideTo(this.initialSwiperIndex, 0)
  }




}
