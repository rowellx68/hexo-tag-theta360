export namespace Theta360 {
    export function simple(str: string): string {
        let imageId: string;
        let returnHtml = "";

        if (str === undefined || str === null || str.length === 0 || str.trim() === "") {
            return returnHtml;
        }

        const fullUrl = str.match(/http(s?)\:\/\/(www\.?)theta360\.com\/s\/([0-9a-zA-Z-_]+)/);

        if (fullUrl) {
            imageId = fullUrl[3];
        } else {
            const code = str.match(/[0-9a-zA-Z-_]+/);

            if (code) {
                imageId = str;
            }
        }

        if (imageId !== undefined && imageId !== null && imageId !== "") {
            returnHtml = `<iframe class="hexo-tag-theta360" src="https://theta360.com/s/${imageId}?view=embed" frameBorder="0"></iframe>`;
        }

        return returnHtml;
    }
}
