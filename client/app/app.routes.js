"use strict";
var router_1 = require("@angular/router");
var record_component_1 = require("./record/record.component");
var list_component_1 = require("./list/list.component");
var appRoutes = [
    { path: '', component: list_component_1.ListComponent },
    { path: 'new', component: record_component_1.RecordComponent },
    { path: 'edit/:id', component: record_component_1.RecordComponent },
    { path: "**", component: list_component_1.ListComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map