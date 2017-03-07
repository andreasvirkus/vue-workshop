<template>
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
import NotesList from './components/NotesList.vue';
import Editor from './components/Editor.vue';

export default {
  components: {
    Toolbar,
    NotesList,
    Editor
  }
};
</script>

<style lang="scss">
  html, body,
  body > div {
    height: 100%;
  }
  body {
    margin: 0;
  }
  body > div {
    display: flex;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    position: relative;
    margin: 0 10px;
  }

  i {
    font-style: normal;
  }
</style>
