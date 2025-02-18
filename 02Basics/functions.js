"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//giving default value
var greetingsBy = function (name, age) {
    if (age === void 0) { age = 15; }
    return name + "Hello";
    console.log("Your age is", age);
};
//void means function doesn't return any value ,absence of value
//never means function never returns  ex:- infinite loop,throw error
greetingsBy("paras");
//return something
function addTwo(num1, num2) {
    return num1 + num2;
}
var user = {
    name: "paras",
    email: 878
};
//return object
var sendObj = function (_a) {
    var name = _a.name, email = _a.email;
    return { name: name, email: email };
};
var p = sendObj(user);
