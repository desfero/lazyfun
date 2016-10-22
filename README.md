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

**Lazy** way of executing passed function:

```javascript
import lazyfun from 'lazyfun';

function getData() {
  console.log('foo');
  return 'baz';
}

const lazyGetData = lazyfun(getData);

lazyGetData(); // log: 'foo', return: 'baz'
```

**Deferred** way of executing passed function:

```javascript
import lazyfun from 'lazyfun';

function getData() {
  console.log('foo');
  return 'baz';
}

const lazyGetData = lazyfun(getData, 100);

// after 100ms -> log: 'foo'

setTimeout(() => {
  lazyGetData(); // return: 'baz'
}, 200);
```

**Immediate** way of executing passed function:

```javascript
import lazyfun from 'lazyfun';

function getData() {
  console.log('foo');
  return 'baz';
}

const lazyGetData = lazyfun(getData, -1); // log: 'foo'

lazyGetData(); // return: 'baz'

```

**Note:**

- pass parameters to function:
```javascript
import lazyfun from 'lazyfun';

function getData(a, b) {
  console.log(a);
  return b;
}

const lazyGetData = lazyfun(getData, null, 'foo', 'bar');

lazyGetData('bar'); // log: 'foo', return 'bar'
```

- if passed function return another function:
```javascript
import lazyfun from 'lazyfun';

function getData() {
  console.log('foo');
  return (t) => { 
    console.log(t);
    return 'baz';
  };
}

const lazyGetData = lazyfun(getData);

const result = lazyGetData('bar'); // log: 'foo', log: 'bar', return 'baz'
```


## Running the tests

```
npm test
```

## License

This project is licensed under the MIT License.
