import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/api/contentful.service';

@Component({
  selector: 'help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  faqList = [];

  constructor(private contentfulServive: ContentfulService) {
  }

  ngOnInit() {
    this.contentfulServive.getFAQs().subscribe(
      (items: any) => {
        this.faqList = items
         console.log(items);
      }
    );
  }
}
