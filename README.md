# vuejs-workshop

> Vue.js based notes app

A small workshop inspired by Coligo.io's Vuex [tutorial](https://coligo.io/learn-vuex-by-building-notes-app/).

Rewritten in Vue 2; uses Vue.js, Vuex & milligram.css.
Set up with [vue-cli](https://github.com/vuejs/vue-cli) (Using the webpack-simple template).

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

Workshop flow:
- Go through vue-cli project setup
  - Explain Vue.js in general (introduce Vue dev tools for Chrome)
  - Go over Vue's single-file components
  - Explain components (lifecycle hooks, data & computed properties, exporting them)
- Set up component views
- Add a tad of style
- Briefly explain Vuex (state, getters, actions & mutations)
  - Install babel plugin (babel-plugin-transform-object-rest-spread) and vuex
- Set up a store
- Add event listeners for our views
- Map getters, actions and state under our components
- Enjoy a hard day's work(...shop)

**TODO**:
- Add Markdown support/parsing
- Add local storage sync
