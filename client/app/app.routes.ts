import { RouterModule, Routes } from "@angular/router";
import { RecordComponent } from "./record/record.component";
import { ListComponent } from "./list/list.component";

const appRoutes: Routes = [
  {path: '', component: ListComponent},
  {path: 'new', component: RecordComponent},
  {path: 'edit/:id', component:RecordComponent},
  {path: "**", component: ListComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
