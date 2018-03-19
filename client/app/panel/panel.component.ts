import { Component, Input, OnInit } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() title: string;

  ngOnInit() {
    const MAX_TITLE_LENGTH = 15;
    if (this.title.length > MAX_TITLE_LENGTH)
      this.title = `${this.title.substr(0,MAX_TITLE_LENGTH)}...`;
  }
}
