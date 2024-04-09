"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var entities_1 = require("../../domain/entities/entities");
/***
 * Export localstore data
*/
var LocalstoreData = /** @class */ (function (_super) {
    __extends(LocalstoreData, _super);
    function LocalstoreData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalstoreData.prototype.getData = function () {
        this.haveLocalstore();
        return JSON.parse(localStorage.getItem("task"));
    };
    LocalstoreData.prototype.setData = function (obj) {
        var allTask = this.getData();
        allTask.push(obj);
        localStorage.setItem("task", JSON.stringify(allTask));
    };
    LocalstoreData.prototype.haveLocalstore = function () {
        if (!localStorage.getItem("task")) {
            localStorage.setItem("task", JSON.stringify([]));
        }
    };
    return LocalstoreData;
}(entities_1.AbsLocalstore));
exports.default = LocalstoreData;
