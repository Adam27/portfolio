import { Injectable } from '@angular/core';
import { fromPromise } from 'rxjs/internal-compatibility';
import { Observable } from 'rxjs';
import { createClient, Entry } from 'contentful';


@Injectable({
  providedIn: 'root'
})

export class ContentfulService {

  private readonly CONFIG = {
    space: 'w1y860sghoyy',
    deliveryAccessToken:
      'iSvLubaZxg5q7uLAQNsjRathMzi2nnEZpmW2TExSOIY',

    contentTypeIds: {
      album: 'album',
      albumGenre: 'albumGenre',
      faq: 'faq'
    },
  };
  /*https://cdn.contentful.com/spaces/w1y860sghoyy/environments/master/entries/2dy3xiWE5nGMPRDfpR74a4?access_token=iSvLubaZxg5q7uLAQNsjRathMzi2nnEZpmW2TExSOIY
  */
  private deliveryClient = createClient({
    space: this.CONFIG.space,
    accessToken: this.CONFIG.deliveryAccessToken
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

  getAlbum(albumId: string): Observable<Entry<any>> {
    return fromPromise(
      this.deliveryClient.getEntry(albumId).then(album => album)
    );
  }

  getAllAlbums(): any/*Observable<Entry<any>[]>*/ {
    return fromPromise(this.deliveryClient.getEntries(Object.assign({
        content_type: this.CONFIG.contentTypeIds.album,
        include: 2
      })).then(entries => {
          /*console.log(JSON.stringify(entries));*/
          entries.items.forEach(function (entry) {
            console.log(entry);

          });

          return entries.items;
        }
      )
    );
  }

  getAllAlbumGenres(): any/*Observable<Entry<any>[]>*/ {
    return fromPromise(this.deliveryClient.getEntries(Object.assign({
        content_type: this.CONFIG.contentTypeIds.albumGenre,
        include: 2
      })).then(entries => {
          /*console.log(JSON.stringify(entries));*/
          entries.items.forEach(function (entry) {
            console.log(entry);

          });

          return entries.items;
        }
      )
    );
  }

  getAlbumsByGenre(genreList: string[]): any/*Observable<Entry<any>[]>*/ {
    return fromPromise(this.deliveryClient.getEntries(Object.assign({
        content_type: this.CONFIG.contentTypeIds.album,
        'fields.albumGenre.sys.id[in]': genreList.toString(),
        include: 2
      })).then(entries => {
          /*console.log(JSON.stringify(entries));*/
          entries.items.forEach(function (entry) {
            console.log(entry);

          });

          return entries.items;
        }
      )
    );
  }



}
