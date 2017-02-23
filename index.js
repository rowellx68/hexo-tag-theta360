"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theta360_1 = require("./lib/theta360");
hexo.extend.tag.register("theta360", function (args, content) {
    return theta360_1.Theta360.simple(args[0]);
}, {
    async: true,
    ends: false
});
