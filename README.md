# hexo-tag-theta360

[![Build Status](https://travis-ci.org/rowellx68/hexo-tag-theta360.svg?branch=master)](https://travis-ci.org/rowellx68/hexo-tag-theta360)
[![npm version](https://badge.fury.io/js/hexo-tag-theta360.svg)](https://badge.fury.io/js/hexo-tag-theta360)
[![dependencies Status](https://david-dm.org/rowellx68/hexo-tag-theta360/status.svg)](https://david-dm.org/rowellx68/hexo-tag-theta360)
[![devDependencies Status](https://david-dm.org/rowellx68/hexo-tag-theta360/dev-status.svg)](https://david-dm.org/rowellx68/hexo-tag-theta360?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/rowellx68/hexo-tag-theta360/badge.svg?branch=master)](https://coveralls.io/github/rowellx68/hexo-tag-theta360?branch=master)

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
By default, the `iframe` has no styling at all. You will need to apply your own styles using CSS by targeting the `hexo-tag-theta360` class.

An example style could be

```css
.hexo-tag-theta360 {
    width: 100%;
    height: 400px;
}
```
