confirm-promise
==============

[![Greenkeeper badge](https://badges.greenkeeper.io/noyobo/confirm-promise.svg)](https://greenkeeper.io/)
[![npm version](http://img.shields.io/npm/v/confirm-promise.svg)](https://www.npmjs.org/package/confirm-promise) [![npm download](http://img.shields.io/npm/dm/confirm-promise.svg)](https://www.npmjs.org/package/confirm-promise) [![npm engines](http://img.shields.io/node/v/confirm-promise.svg)](https://www.npmjs.org/package/confirm-promise) [![build status](http://img.shields.io/travis/noyobo/confirm-promise.svg)](https://travis-ci.org/noyobo/confirm-promise) [![Coverage Status](https://img.shields.io/coveralls/noyobo/confirm-promise.svg)](https://coveralls.io/r/noyobo/confirm-promise) [![dependencies Status](https://david-dm.org/noyobo/confirm-promise/status.svg)](https://david-dm.org/noyobo/confirm-promise)

A simple command-line tool to confirm

![image](https://cloud.githubusercontent.com/assets/1292082/21397150/a39b4cc8-c7dd-11e6-97ca-005c4619de03.png)

## Install

```
$ npm install --save confirm-promise
```

## Api

```javascript
confirm(message [, chose] [, callback])
```

## Example

```javascript
var confirm = require('confirm-promise')

confirm('how are you', function(ok){
    if(ok){ // ok is boolean
        // I'm crazy
    }
})

confirm('how are you')
  .then(ok => {})
  .catch(ok => {})

var ok = yield confirm('how are you');

```

```javascript
var confirm = require('confirm-promise')

confirm('how are you', ['ok', 'cancel'] ,function(ok){
    if(ok){ // ok is boolean
        // I'm crazy
    }
})

```


