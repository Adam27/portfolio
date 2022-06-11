import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/api/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit{
  fakeArray = new Array(14);

  albumsList: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) {
  }

  ngOnInit() {
    /*this.contentfulService.getAlbumsByGenre(['6Bvef0zMHFPpR7VxKGnckZ','tvnf1kN1zzZq0omUhsQ5A']).subscribe(
      (list: any) => {
        this.albumsList = list;
      }
    );*/
    this.contentfulService.getAllAlbumGenres().subscribe(
      (list: any) => {
        this.albumsList = list;
      }
    );
  }
}
