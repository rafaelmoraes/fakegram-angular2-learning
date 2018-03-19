import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PictureModule } from './picture/picture.module';
import { HttpModule } from "@angular/http";
import 'rxjs/add/operator/map';
import { PanelModule } from "./panel/panel.module";
import { RecordComponent } from "./record/record.component";
import { ListComponent } from "./list/list.component";
import { routing } from "./app.routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BtnModule } from "./btn/btn.module";

@NgModule({
  imports: [
    BrowserModule,
    PictureModule,
    HttpModule,
    PanelModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    BtnModule
  ],
  declarations: [
    AppComponent,
    RecordComponent,
    ListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
