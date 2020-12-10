# Convert digits (integer) to alphabetical character and vice versa

It's useful to hide object id in url, for example instead of integer number **1**
``
/article/comments/1
``
use base52 encoder to show ***b***

Numbers beginning from ``a`` that equals ``0`` and ``Z`` that equals ``51``;

## Installation with NPM
```
npm i base52
```

## Usage syntax
```javascript
const x = require('base52');

console.log(x.base52Decode('srLweV')); // output: 17902030294
console.log(x.base52Encode(98346982)); // output: gWwxn
```

## VUEJs Mixin
```javascript
import HelloWorld from './components/HelloWorld.vue'
import {VueBase52Mixin} from 'base52'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  mixins: [VueBase52Mixin]
```