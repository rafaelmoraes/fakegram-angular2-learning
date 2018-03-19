import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'btn',
  templateUrl: "./btn.component.html"
})
export class BtnComponent {
  @Input() text: string = "default";
  @Input() cssClass: string = "btn-default";
  @Input() type: string = "button";
  @Input() disabled: boolean = false;
  @Input() confirmMessage: string;
  @Output() action = new EventEmitter();

  onClick() {
    if (this.confirmMessage && !confirm(this.confirmMessage))
      return;
    this.action.emit(null);
  }
}
