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
var Paras = /** @class */ (function () {
    function Paras(name) {
        this.name = name;
        console.log("parent", this.name);
    }
    Object.defineProperty(Paras.prototype, "getReelTime", {
        get: function () {
            return 60;
        },
        enumerable: false,
        configurable: true
    });
    return Paras;
}());
//We can't define any instance of abstract class
//This class can be extended by other inherit class
//const paras = new Paras() //fail to create instance
var ParasP = /** @class */ (function (_super) {
    __extends(ParasP, _super);
    function ParasP(name) {
        var _this = _super.call(this, name) || this; //call Paras constructor
        console.log("child called");
        return _this;
    }
    ;
    ParasP.prototype.getName = function () {
        console.log(this.name);
    };
    return ParasP;
}(Paras));
//abstract class can only be accessed by its children.
//We can't make direct instance from abstract class
//super should be called to ensure that parent class is called before child class
var newParas = new ParasP("paras");
