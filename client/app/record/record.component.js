"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var picture_component_1 = require("../picture/picture.component");
var forms_1 = require("@angular/forms");
var picture_service_1 = require("../picture/picture.service");
var router_1 = require("@angular/router");
var RecordComponent = (function () {
    function RecordComponent(service, formBuilder, route, router) {
        var _this = this;
        this.picture = new picture_component_1.PictureComponent();
        this.service = service;
        this.route = route;
        this.router = router;
        this.myForm = formBuilder.group({
            title: ["", forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4)])],
            url: ["", forms_1.Validators.required],
            description: [""]
        });
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.service
                    .findByID(id)
                    .subscribe(function (pic) { return _this.picture = pic; }, function (err) { return console.error(err); });
            }
        });
    }
    RecordComponent.prototype.save = function (event) {
        var _this = this;
        event.preventDefault();
        this.service
            .save(this.picture)
            .subscribe(function (response) {
            _this.message = response.message;
            _this.picture = new picture_component_1.PictureComponent();
            if (response.wasUpdate)
                _this.router.navigate(['']);
        }, function (err) {
            console.error(err);
            _this.message = "Failed to save picture. =/";
        });
    };
    RecordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'record',
            templateUrl: './record.component.html'
        }), 
        __metadata('design:paramtypes', [picture_service_1.PictureService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
    ], RecordComponent);
    return RecordComponent;
}());
exports.RecordComponent = RecordComponent;
//# sourceMappingURL=record.component.js.map