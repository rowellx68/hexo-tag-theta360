var Theta360;
(function (Theta360) {
    function simple(str) {
        var imageId;
        var returnHtml = "";
        if (str === undefined || str === null || str.length === 0 || str.trim() === "") {
            return returnHtml;
        }
        var fullUrl = str.match(/http(s?)\:\/\/(www\.?)theta360\.com\/s\/([0-9a-zA-Z-_]+)/);
        if (fullUrl) {
            imageId = fullUrl[3];
        }
        else {
            var code = str.match(/[0-9a-zA-Z-_]+/);
            if (code) {
                imageId = str;
            }
        }
        if (imageId !== undefined && imageId !== null && imageId !== "") {
            returnHtml = "<iframe class=\"hexo-tag-theta360\" src=\"https://theta360.com/s/" + imageId + "?view=embed\" frameBorder=\"0\"></iframe>";
        }
        return returnHtml;
    }
    Theta360.simple = simple;
})(Theta360 || (Theta360 = {}));
hexo.extend.tag.register("theta360", function (args, content) {
    return Theta360.simple(args[0]);
}, {
    async: true,
    ends: false
});
