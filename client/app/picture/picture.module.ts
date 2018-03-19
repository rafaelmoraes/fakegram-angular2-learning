import { NgModule } from "@angular/core";
import { PictureComponent } from "./picture.component";
import { FilterByTitle } from "./picture.pipes";
import { PictureService } from "./picture.service";

@NgModule({
  declarations: [ PictureComponent, FilterByTitle ],
  exports: [ PictureComponent, FilterByTitle ],
  providers: [ PictureService ]
})
export class PictureModule { }
