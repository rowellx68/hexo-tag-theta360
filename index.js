hexo.extend.tag.register("theta360", function (args, content) {
    var imageId;
    var returnHtml = "";
    if (args.length === 0 || !args[0] || args[0].trim() === "") {
        return returnHtml;
    }
    var fullUrl = args[0].match(/http(s?)\:\/\/(www\.?)theta360\.com\/s\/([0-9a-zA-Z-_]+)/);
    if (fullUrl) {
        imageId = fullUrl[3];
    }
    else {
        var code = args[0].match(/[0-9a-zA-Z-_]+/);
        if (code) {
            imageId = args[0];
        }
    }
    if (imageId !== undefined && imageId !== null && imageId !== "") {
        returnHtml = "<iframe class=\"hexo-tag-theta360\" src=\"https://theta360.com/s/" + imageId + "?view=embed\" frameBorder=\"0\"></iframe>";
    }
    return returnHtml;
}, {
    async: true,
    ends: false
});
