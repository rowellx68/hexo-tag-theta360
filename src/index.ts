import { Theta360 } from "./lib/theta360";

hexo.extend.tag.register("theta360", (args: string[], content: string): string => {
    return Theta360.simple(args[0]);
}, {
    async: true,
    ends: false
});
