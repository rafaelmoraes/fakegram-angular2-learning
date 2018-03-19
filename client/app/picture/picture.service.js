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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var PictureService = (function () {
    function PictureService(http) {
        this.url = 'v1/pictures';
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    PictureService.prototype.findByID = function (id) {
        return this.http
            .get(this.url + "/" + id)
            .map(function (res) { return res.json(); });
    };
    PictureService.prototype.all = function () {
        return this.http.get(this.url)
            .map(function (res) { return res.json(); });
    };
    PictureService.prototype.save = function (picture) {
        if (picture._id)
            return this.update(picture);
        return this.create(picture);
    };
    PictureService.prototype.update = function (picture) {
        return this.http
            .put(this.url + "/" + picture._id, JSON.stringify(picture), { headers: this.headers })
            .map(function () { return new ServiceMessage("Picture saved successfully!", true); });
    };
    PictureService.prototype.create = function (picture) {
        return this.http
            .post(this.url, JSON.stringify(picture), { headers: this.headers })
            .map(function () { return new ServiceMessage("Picture saved successfully!", false); });
    };
    PictureService.prototype.delete = function (picture) {
        return this.http.delete(this.url + "/" + picture._id);
    };
    PictureService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PictureService);
    return PictureService;
}());
exports.PictureService = PictureService;
var ServiceMessage = (function () {
    function ServiceMessage(_message, _update) {
        this._message = _message;
        this._update = _update;
        this._message = _message;
        this._update = _update;
        console.info(this);
    }
    Object.defineProperty(ServiceMessage.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceMessage.prototype, "wasUpdate", {
        get: function () {
            return this._update;
        },
        enumerable: true,
        configurable: true
    });
    return ServiceMessage;
}());
exports.ServiceMessage = ServiceMessage;
//# sourceMappingURL=picture.service.js.map