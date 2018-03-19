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
var picture_component_1 = require("./picture.component");
var picture_pipes_1 = require("./picture.pipes");
var picture_service_1 = require("./picture.service");
var PictureModule = (function () {
    function PictureModule() {
    }
    PictureModule = __decorate([
        core_1.NgModule({
            declarations: [picture_component_1.PictureComponent, picture_pipes_1.FilterByTitle],
            exports: [picture_component_1.PictureComponent, picture_pipes_1.FilterByTitle],
            providers: [picture_service_1.PictureService]
        }), 
        __metadata('design:paramtypes', [])
    ], PictureModule);
    return PictureModule;
}());
exports.PictureModule = PictureModule;
//# sourceMappingURL=picture.module.js.map