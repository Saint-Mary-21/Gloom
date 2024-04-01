"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Address = void 0;
var typeorm_1 = require("typeorm");
var Address = /** @class */ (function () {
    function Address() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid")
    ], Address.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Address.prototype, "referenceId");
    __decorate([
        (0, typeorm_1.Column)()
    ], Address.prototype, "nameSpace");
    __decorate([
        (0, typeorm_1.Column)()
    ], Address.prototype, "type");
    __decorate([
        (0, typeorm_1.Column)()
    ], Address.prototype, "value");
    __decorate([
        (0, typeorm_1.Column)()
    ], Address.prototype, "isPrimary");
    Address = __decorate([
        (0, typeorm_1.Entity)()
    ], Address);
    return Address;
}());
exports.Address = Address;
