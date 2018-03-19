import { Http, Headers, Response } from '@angular/http';
import { PictureComponent } from './picture.component';
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable()
export class PictureService {
  http: Http;
  headers: Headers;
  url: string = 'v1/pictures';

  constructor(http: Http) {
    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  findByID(id: string): Observable<PictureComponent> {
    return this.http
      .get(`${this.url}/${id}`)
      .map(res => res.json());
  }

  all(): Observable<PictureComponent[]> {
    return this.http.get(this.url)
      .map(res => res.json());
  }

  save(picture: PictureComponent): Observable<ServiceMessage> {
    if (picture._id)
      return this.update(picture);

    return this.create(picture);
  }

  update(picture: PictureComponent): Observable<ServiceMessage> {
    return this.http
      .put(
        `${this.url}/${picture._id}`,
        JSON.stringify(picture),
        { headers: this.headers }
      )
      .map(() => new ServiceMessage("Picture saved successfully!", true));
  }

  create(picture: PictureComponent): Observable<ServiceMessage> {
    return this.http
      .post(
        this.url,
        JSON.stringify(picture),
        { headers: this.headers }
      )
      .map(() => new ServiceMessage("Picture saved successfully!", false));
  }

  delete(picture: PictureComponent) {
    return this.http.delete(`${this.url}/${picture._id}`)
  }
}


export class ServiceMessage {
  constructor(private _message: string, private _update: boolean) {
    this._message = _message;
    this._update = _update;
    console.info(this);
  }

  get message(): string {
    return this._message;
  }

  get wasUpdate(): boolean {
    return this._update;
  }
}
