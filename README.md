# @markorusic/create-reducer

[![npm (scoped)](https://img.shields.io/npm/v/@markorusic/create-reducer.svg)](https://www.npmjs.com/package/@markorusic/create-reducer)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@markorusic/create-reducer.svg)](https://www.npmjs.com/package/@markorusic/create-reducer)

[Create cleaner, more readable, boilerplate-free reducers applicable to any JavaScript environment.](https://medium.com/@markorusic/write-cleaner-reducers-1c433a94a166)

## Install

```
$ npm i @markorusic/create-reducer
```

## Usage

```js
import createReducer from '@markorusic/create-reducer'

const initialState = { count: 0 }

const actionTypes = {
  increment: 'increment',
  decrement: 'decrement'
}

const counterReducer = createReducer({
  [actionTypes.increment]: state => ({
    count: state.count + 1
  }),
  [actionTypes.decrement]: state => ({
    count: state.count - 1
  })
}, initialState)
```
