import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/api/contentful.service';
import { Entry } from 'contentful';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit{
  fakeArray = new Array(14);

  albumsList: Entry<any>[] = [];

  constructor(private contentfulServive: ContentfulService) {
  }

  ngOnInit() {
    this.contentfulServive.getAllAlbums().subscribe(
      (list: any) => {
        this.albumsList = list;
         console.log(list);

      }
    );
  }
}
