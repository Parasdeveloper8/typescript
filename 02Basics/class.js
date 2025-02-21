"use strict";
//classes
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
var Developer = /** @class */ (function () {
    function Developer(skillc, namec, agec) {
        this.working = false;
        this.id = "abcd3";
        this.skill = skillc;
        this.age = agec;
        this.name = namec;
    }
    Object.defineProperty(Developer.prototype, "getSkill", {
        //getters and setters :=
        //We can use to expose private property by using some predefined methods
        get: function () {
            console.log(this.skill);
            return this.skill;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Developer.prototype, "Working", {
        //We cannot use any return type with set method
        set: function (state) {
            this.working = state;
            console.log(this.working);
        },
        enumerable: false,
        configurable: true
    });
    //private method
    Developer.prototype.setId = function (value) {
        this.id = value;
    };
    return Developer;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.work = function (state) {
        this.working = true;
    };
    return Programmer;
}(Developer));
var paras = new Developer(["HTML", "CSS", "JS"], "paras", 15);
//paras.working; 
//Private property can be only accessed within class.
//Every property before which you have not written private is public
//public ,protected and private are access modifiers
//protected can be used within that class and its subclass
paras.skill;
console.log(paras.getSkill);
paras.Working = false;
