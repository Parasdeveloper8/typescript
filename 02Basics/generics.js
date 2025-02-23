"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Generics
function sendAnything(arg) {
    return arg;
}
//call this function and inspect it to see data type
sendAnything("paras"); //The argument is string but data type is still any
//generic
function sendAny(arg) {
    return arg;
}
//call this function and inspect
sendAny("paras"); //The argument is "paras" and "paras" is data type now
sendAny("paras");
sendAny(2);
var sendName = function (name) {
    return name;
};
//or
var sendNames = function (names) {
    return names;
};
var arr = { conString: "abcd", user: "pp", port: 4900 };
function createPool(arg, argt) {
    return {
        arg: arg,
        argt: argt
    };
}
createPool("Paras", arr);
//Generic class
var Developer = /** @class */ (function () {
    function Developer(skills) {
        this.skill = skills;
    }
    Object.defineProperty(Developer.prototype, "getSkills", {
        get: function () {
            console.log(this.skill);
            return this.skill;
        },
        enumerable: false,
        configurable: true
    });
    return Developer;
}());
var skls = ["HTML", "Css"];
var paras = new Developer(skls);
paras.getSkills;
