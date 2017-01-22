import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Image } from '../domain/entities';

@Injectable()
export class BingImageService {
  imageUrl: string;
  headers = new Headers({
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': 'ab63a8905f1e4a44b311888d1b0a5acc'
  });

  constructor(private http: Http) {
    const q = '库里+墙纸';
    const baseUrl: string = `https://api.cognitive.microsoft.com/bing/v5.0/images/search`;
    this.imageUrl = baseUrl + `?q=${q}&count=5&mkt=zh-CN&imageType=Photo&size=Large`;
  }

  getImageUrl(): Observable<Image[]> {
    return this.http.get(this.imageUrl, { headers: this.headers })
               .map(res => res.json().value as Image[])
               .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}