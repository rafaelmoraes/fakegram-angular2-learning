import { Component } from "@angular/core";
import { PictureComponent } from "../picture/picture.component";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PictureService } from "../picture/picture.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'record',
  templateUrl: './record.component.html'
})
export class RecordComponent {
  picture: PictureComponent = new PictureComponent();
  myForm: FormGroup;
  service: PictureService;
  router: Router;
  route: ActivatedRoute;
  message: string;

  constructor(service: PictureService, formBuilder: FormBuilder, route: ActivatedRoute, router: Router) {
    this.service = service;
    this.route = route;
    this.router = router;
    this.myForm = formBuilder.group({
      title: ["", Validators.compose([
        Validators.required,
        Validators.minLength(4)]
      )],
      url: ["", Validators.required],
      description: [""]
    });

    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.service
          .findByID(id)
          .subscribe(pic => this.picture = pic, err => console.error(err));
      }
    });
  }

  save(event) {
    event.preventDefault();
    this.service
      .save(this.picture)
      .subscribe(response => {
        this.message = response.message;
        this.picture = new PictureComponent();
        if (response.wasUpdate) this.router.navigate(['']);
      }, err => {
        console.error(err);
        this.message = "Failed to save picture. =/";
      });
  }
}
