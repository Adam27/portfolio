import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/api/contentful.service';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

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
