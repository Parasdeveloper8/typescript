//giving default value
var greetingsBy = function (name, age) {
    if (age === void 0) { age = 15; }
    return name + "Hello";
    console.log("Your age is", age);
};
greetingsBy("paras");
