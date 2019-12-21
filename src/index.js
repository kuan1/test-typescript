(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./06-es6/c"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var c_1 = require("./06-es6/c");
    var a2 = {
        a: 2,
        c: 2,
    };
    var b2 = {
        a: '2',
    };
    console.log(c_1.a, c_1.b, a2, b2);
});
