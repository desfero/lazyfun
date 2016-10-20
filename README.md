# LazyFun

Invoke passed function in 3 different modes: lazy, deferred, immediate.

## Getting Started

### Installing

Install lazyfun by npm

```
npm install lazyfun
```

or by bower

```
bower install lazyfun
```

### Usage

Basic usage:

```javascript
import lazyfun from 'lazyfun';

function getData() {
  console.log('foo');
}

const lazyGetData = lazyfun(getData)

lazyGetData(); // log: 'foo'

```

## Running the tests

```
npm test
```

## License

This project is licensed under the MIT License.
