# node-xstream

#### Duplex streams that can do operations

## Usage
`npm install node-xstream`

```javascript
var xstream = require('xstream');

// xstream.[operation] is a duplex stream which reads data and emits the transformed data.

process.stdin
  .pipe(xstream.replace('hi', 'xstream'))
  .pipe(process.stdout)

// Replaces the word 'the' when typed on console.
```
## String operations
### xstream.replace(search, replace)
*  xstream.replace('hello', 'hi')
*  xstream.replace(/hello/gi, 'hi') // Regular expression based searches


## Hooks
### xstream.hook(custom_function)
The custom function acts on the data being emitted.
This function must return some data
```javascript
process.stdin
  .pipe(xstream.hook(doStuff)
  .pipe(process.stdout)

function doStuff(data){
  console.log(data);
  data = data.toString().toUpperCase();
return data;
}

```

## License
The MIT License (MIT)

Copyright (c) 2014 Ahamed Nafeez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
