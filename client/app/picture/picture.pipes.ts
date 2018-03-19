import { Pipe, PipeTransform } from "@angular/core";
import { PictureComponent } from "./picture.component";
@Pipe({
  name: 'filterByTitle'
})
export class FilterByTitle implements PipeTransform {
  transform(pictures: PictureComponent[], title: string) {
    let titleSearched = title.toLowerCase();
    return pictures.filter(
      pic => pic.title.toLowerCase().includes(titleSearched)
    );
  }
}
