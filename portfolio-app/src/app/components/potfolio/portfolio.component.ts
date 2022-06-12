import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/api/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit{
  albumsList: Entry<any>[] = [];
  albumGenreList: Entry<any>[] = [];
  albums: any[] = [];

  constructor(private contentfulService: ContentfulService) {
  }

  ngOnInit() {
    this.contentfulService.getAllAlbums().subscribe(
      (list: any) => {
        this.albumsList = list;
        console.log("albumsList", list);
      }
    );
    this.contentfulService.getAllAlbumGenres().subscribe(
      (list: any) => {
        this.albumGenreList = list;
         console.log("albumGenreList", list);
      }
    );


  }
}
