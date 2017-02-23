# hexo-tag-theta360
Embed 360 photos uploaded to theta360.com in your [Hexo](https://github.com/hexojs/hexo) blog.

## Installation
```bash
npm install --save hexo-tag-theta360
```

## Usage
```swig
{% theta360 image-url %}
```

or 

```swig
{% theta360 image-id %}
```

## Example Usages
Embed using the full URL.
```swig
{% theta360 https://theta360.com/s/fHmW9N6LuKPPp6pqmnPt1vpho %}
```

Embed using the image ID.
```swig
{% theta360 fHmW9N6LuKPPp6pqmnPt1vpho %}
```

## Styling
By default, the `iframe` has no styling at all. You will need to apply your own styles using CSS by targetting the `hexo-tag-theta360` class.

An example style could be

```css
.hexo-tag-theta360 {
    width: 100%;
    height: 400px;
}
```
