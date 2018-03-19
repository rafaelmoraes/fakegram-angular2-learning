import { Component, Input } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})

export class PictureComponent {
  @Input() title: string;
  @Input() url: string;
  description: string;
  _id: string;
}
