"use strict";
//The process of knowing the type of a variable is known as type narrowing,
//type of variable using typeof
Object.defineProperty(exports, "__esModule", { value: true });
function detect(value) {
    if ("value" in value) {
        value.value;
    }
    if ("age" in value) {
        value.age;
    }
}
//instanceof means if variable is instance of any class or constructed using new keyword
//type predicate
function typePred(arg) {
    return typeof arg === "number";
}
typePred(42);
