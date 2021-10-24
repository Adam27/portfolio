import { Injectable } from '@angular/core';
import { fromPromise } from 'rxjs/internal-compatibility';
import { Observable } from 'rxjs';
import { createClient, Entry } from 'contentful';


@Injectable({
  providedIn: 'root'
})

export class ContentfulService {

  private readonly CONFIG = {
    space: 'xrengt4bvmur',
    accessToken:
      'sOrYEpWYJt8v9fuB-2mkbKkKXyaX5hCsR2j-2G8uOQE',

    contentTypeIds: {
      todoItem: 'todoItem',
      album: 'album',
      faq: 'faq'
    },
  };

  private deliveryClient = createClient({
    space: this.CONFIG.space,
    accessToken: this.CONFIG.accessToken
  })


  getFAQs(): Observable<Entry<any>[]> {
    return fromPromise(
      this.deliveryClient.getEntries(
        Object.assign({
            content_type: this.CONFIG.contentTypeIds.faq
          }
        )
      ).then(res => res.items)
    );
  }

  getAllAlbums(): Observable<Entry<any>[]> {
    return fromPromise(this.deliveryClient.getEntries(Object.assign({
        content_type: this.CONFIG.contentTypeIds.album,
        include: 2
      })).then(res => res.items)
    );
  }

}
