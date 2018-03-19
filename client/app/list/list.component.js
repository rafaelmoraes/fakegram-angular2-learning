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
var picture_service_1 = require("../picture/picture.service");
var ListComponent = (function () {
    function ListComponent(service) {
        var _this = this;
        this.pictures = [];
        this.message = '';
        this.service = service;
        this.service
            .all()
            .subscribe(function (pictures) {
            _this.pictures = pictures;
        }, function (err) { return console.error(err); });
    }
    ListComponent.prototype.delete = function (picture) {
        var _this = this;
        this.service
            .delete(picture)
            .subscribe(function () {
            var newPics = _this.pictures.slice();
            newPics.splice(newPics.indexOf(picture), 1);
            _this.pictures = newPics;
            _this.message = "Picture deleted successfully!";
        }, function (err) {
            console.error(err);
            _this.message = "Delete picture failed. =/";
        });
    };
    ListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'list',
            templateUrl: './list.component.html'
        }), 
        __metadata('design:paramtypes', [picture_service_1.PictureService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map