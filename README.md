confirm-promise
==============
[![npm version](http://img.shields.io/npm/v/confirm-promise.svg)](https://www.npmjs.org/package/confirm-promise) [![npm download](http://img.shields.io/npm/dm/confirm-promise.svg)](https://www.npmjs.org/package/confirm-promise) [![npm engines](http://img.shields.io/node/v/confirm-promise.svg)](https://www.npmjs.org/package/confirm-promise) [![build status](http://img.shields.io/travis/noyobo/confirm-promise.svg)](https://travis-ci.org/noyobo/confirm-promise) [![Coverage Status](https://img.shields.io/coveralls/noyobo/confirm-promise.svg)](https://coveralls.io/r/noyobo/confirm-promise) [![npm dependencise](https://david-dm.org/noyobo/confirm-promise.svg)](https://david-dm.org/noyobo/confirm-promise)

[![NPM](https://nodei.co/npm/confirm-promise.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/confirm-promise/)

A simple command-line tool to confirm

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


