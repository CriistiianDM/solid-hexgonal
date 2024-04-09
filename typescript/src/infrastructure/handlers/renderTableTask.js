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
var absRender_1 = require("../../domain/entities/absRender");
var localstore_1 = require("../repositories/localstore");
/**
 * Render table of lst
*/
var RenderTableTask = /** @class */ (function (_super) {
    __extends(RenderTableTask, _super);
    function RenderTableTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RenderTableTask.prototype.render = function () {
        var _this = this;
        var localstore = new localstore_1.default(), dataPrint = localstore.getData(), tableTask = document.querySelector('#table-list-task tbody');
        if (dataPrint.length > 0) {
            var allTask_1 = '';
            tableTask.innerHTML = '';
            (dataPrint).map(function (element) {
                allTask_1 += _this.generateStruct(element);
            });
            tableTask.innerHTML = allTask_1;
        }
        if (dataPrint.length <= 0) {
            tableTask.innerHTML = 'No have task pending';
        }
    };
    RenderTableTask.prototype.generateStruct = function (obj) {
        return "\n        <tr>\n            <td>\n                <div tag=\"".concat(obj.id, "\">\n                    <strong>").concat(obj.title, "</strong>\n                    <span>").concat(obj.desc, "</span>\n                    <input type=\"checkbox\" />\n                </div>\n            </td>\n        </tr>");
    };
    return RenderTableTask;
}(absRender_1.default));
exports.default = RenderTableTask;
