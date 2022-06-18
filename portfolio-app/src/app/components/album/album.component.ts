import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentfulService } from '../../services/api/contentful.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  album: any;
  cols : number = 2;
  gridByBreakpoint = {
    xl: 5,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1
  }

  isSwiperVisible = false;
  initialSwiperIndex = 0;
  viewportDimensions = {
    width: 500,
    height: 500
  }
  constructor(private route: ActivatedRoute,
              private contentfulService: ContentfulService,
              private location: Location,
              private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {

        this.setViewportDimensions();

        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
        }
      }
    });
  }

  setViewportDimensions(){
    this.viewportDimensions.width = window.innerWidth;
    this.viewportDimensions.height = window.innerHeight;
  }

  showSwiper(index: number){
         this.isSwiperVisible = true;
         this.initialSwiperIndex = index;
  }
  closeSwiper(){
    this.isSwiperVisible = false;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.contentfulService.getAlbum(id).subscribe(
      (album: any) => {
        this.album = album;
        console.log("album", album);
      }
    );
  }
  goBack(): void {
    this.location.back();
  }
}
