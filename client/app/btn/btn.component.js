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
var BtnComponent = (function () {
    function BtnComponent() {
        this.text = "default";
        this.cssClass = "btn-default";
        this.type = "button";
        this.disabled = false;
        this.action = new core_1.EventEmitter();
    }
    BtnComponent.prototype.onClick = function () {
        if (this.confirmMessage && !confirm(this.confirmMessage))
            return;
        this.action.emit(null);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BtnComponent.prototype, "text", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BtnComponent.prototype, "cssClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BtnComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], BtnComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BtnComponent.prototype, "confirmMessage", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BtnComponent.prototype, "action", void 0);
    BtnComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'btn',
            templateUrl: "./btn.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], BtnComponent);
    return BtnComponent;
}());
exports.BtnComponent = BtnComponent;
//# sourceMappingURL=btn.component.js.map