import { Component } from "@angular/core";
import { PictureService } from "../picture/picture.service";
import { PictureComponent } from "../picture/picture.component";

@Component({
  moduleId: module.id,
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  pictures: PictureComponent[] = [];
  service: PictureService;
  message: string = '';

  constructor(service: PictureService) {
    this.service = service;
    this.service
      .all()
      .subscribe(pictures => {
        this.pictures = pictures;
      }, err => console.error(err));
  }

  delete(picture) {
    this.service
      .delete(picture)
      .subscribe(() => {
        let newPics = [...this.pictures]
        newPics.splice(newPics.indexOf(picture), 1);
        this.pictures = newPics;
        this.message = "Picture deleted successfully!";
      }, err => {
        console.error(err);
        this.message = "Delete picture failed. =/";
      });
  }
}
